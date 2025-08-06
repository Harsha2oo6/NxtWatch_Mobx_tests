import { vi } from "vitest";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import { render, screen } from "@testing-library/react";
import { runInAction } from "mobx";
import Trending from ".";

beforeEach(() => {
  dashboard.trendingError = "";
  dashboard.isTrendingLoading = false;
  dashboard.trendingVideosArray = [];
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("trending Page", () => {
  test("fetches trending videos initially and to render header with name Trending ", () => {
    const mockFetch = vi
      .spyOn(dashboard, "fetchTrendingVideos")
      .mockResolvedValue();
    render(<Trending />);
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(screen.getByText("Trending")).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalled();
  });

  test("renders failure view on trending fetch error", async () => {
    vi.spyOn(dashboard, "fetchTrendingVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.trendingError = "some error";
      });

      return Promise.reject("fail");
    });

    render(<Trending />);
    expect(await screen.findByTestId("failureview")).toBeInTheDocument();
  });

  test("renders loader while trending loading", async () => {
    vi.spyOn(dashboard, "fetchTrendingVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.isTrendingLoading = true;
      });

      return Promise.resolve();
    });

    render(<Trending />);
    expect(await screen.findByTestId("loader")).toBeInTheDocument();
  });
});
