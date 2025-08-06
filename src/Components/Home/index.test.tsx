import { vi } from "vitest";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import Home from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { runInAction } from "mobx";

beforeEach(() => {
  dashboard.homeError = "";
  dashboard.isHomeLoading = false;
  dashboard.homeVideosArray = [];
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Home Page", () => {
  test("fetches home videos initially with empty search query", () => {
    const mockFetch = vi
      .spyOn(dashboard, "fetchHomeVideos")
      .mockResolvedValue();
    render(<Home />);

    expect(screen.getByTestId(/searchbutton/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(dashboard.searchQuery).toBe("");
    expect(mockFetch).toHaveBeenCalled();
  });

  test("shows and hides advertisement banner", async () => {
    render(<Home />);

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /x/i });
    await userEvent.click(closeBtn);

    expect(screen.queryByTestId("banner")).not.toBeInTheDocument();
  });

  test("updates search query and calls fetch on search", async () => {
    const mockFetch = vi
      .spyOn(dashboard, "fetchHomeVideos")
      .mockResolvedValue();
    render(<Home />);

    const input = screen.getByPlaceholderText(/search/i);
    await userEvent.type(input, "123");

    expect(dashboard.searchQuery).toBe("123");

    const searchBtn = screen.getByTestId("searchbutton");
    await userEvent.click(searchBtn);

    expect(mockFetch).toHaveBeenCalledWith(true);
  });

  test("renders no videos found view", async () => {
    vi.spyOn(dashboard, "fetchHomeVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.homeVideosArray = [];
      });

      return Promise.resolve();
    });

    render(<Home />);
    expect(await screen.findByTestId("novideosview")).toBeInTheDocument();
  });

  test("renders failure view on fetch error", async () => {
    vi.spyOn(dashboard, "fetchHomeVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.homeError = "some error";
      });

      return Promise.reject("fail");
    });

    render(<Home />);
    expect(await screen.findByTestId("failureview")).toBeInTheDocument();
  });

  test("renders loader while loading", async () => {
    vi.spyOn(dashboard, "fetchHomeVideos").mockImplementation(() => {
      runInAction(() => {
        dashboard.isHomeLoading = true;
      });

      return Promise.resolve();
    });

    render(<Home />);
    expect(await screen.findByTestId("loader")).toBeInTheDocument();
  });
});
