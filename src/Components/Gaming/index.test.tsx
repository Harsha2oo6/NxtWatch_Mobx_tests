import { vi } from "vitest";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import { render, screen } from "@testing-library/react";
import { runInAction } from "mobx";
import Gaming from ".";

beforeEach(() => {
  dashboard.gamingError = "";
  dashboard.isGamingLoading = false;
  dashboard.gamingVideosArray = [];
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("gaming Page", () => {
  test("fetches gaming videos initially and to render header with name Gaming ", () => {
    const mockFetch = vi
      .spyOn(dashboard, "fetchGamingVideos")
      .mockResolvedValue();
    render(<Gaming />);
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(screen.getByText("Gaming")).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalled();
  });

  test("renders failure view on gaming fetch error", async () => {
    vi.spyOn(dashboard, "fetchGamingVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.gamingError = "some error";
      });

      return Promise.reject("fail");
    });

    render(<Gaming />);
    expect(await screen.findByTestId("failureview")).toBeInTheDocument();
  });

  test("renders loader while gaming loading", async () => {
    vi.spyOn(dashboard, "fetchGamingVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.isGamingLoading = true;
      });

      return Promise.resolve();
    });

    render(<Gaming />);
    expect(await screen.findByTestId("loader")).toBeInTheDocument();
  });
});
