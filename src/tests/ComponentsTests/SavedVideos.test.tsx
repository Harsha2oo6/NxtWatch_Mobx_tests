import { describe, it, expect, beforeEach,  } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { runInAction } from "mobx";
import SavedVideos, { RenderSavedVideos } from "../../Components/SavedVideos";
import { dashboard } from "../../Stores/Dashboard/dashboard";

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

const mockSavedVideo = {
  id: "saved-id",
  channel: {
    name: "Saved Channel",
    profile_image_url: "https://example.com/profile.jpg",
    subscriber_count: "1235",
  },
  published_at: "2023-01-01",
  thumbnail_url: "https://example.com/thumb.jpg",
  title: "Saved Video",
  view_count: "5",
  description: "Sample description for the saved video",
  video_url: "https://example.com/video.mp4",
};

describe("SavedVideos", () => {
  beforeEach(() => {
    runInAction(() => {
      dashboard.savedVideosArray = [mockSavedVideo];
    });
  });

  it("renders RouteHeader and saved videos", () => {
    render(
      <MemoryRouter>
        <SavedVideos />
      </MemoryRouter>
    );
    expect(screen.getByText("Saved Videos")).toBeInTheDocument();
    expect(screen.getByText("Saved Video")).toBeInTheDocument();
  });

  it("shows NoSavedVideos if no saved videos", () => {
    runInAction(() => {
      dashboard.savedVideosArray = [];
    });
    render(
      <MemoryRouter>
        <RenderSavedVideos />
      </MemoryRouter>
    );
    expect(screen.getByText(/no saved videos/i)).toBeInTheDocument();
  });
});

describe("SavedVideoCard navigation", () => {
  it("navigates to video details page on click", () => {
    runInAction(() => {
      dashboard.savedVideosArray = [mockSavedVideo];
    });
    render(
      <MemoryRouter initialEntries={["/saved"]}>
        <Routes>
          <Route path="/saved" element={<SavedVideos />} />
          <Route path="/videos/:id" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("trendingVideoView"));
    expect(screen.getByTestId("location-display").textContent).toBe(
      "/videos/saved-id"
    );
  });
});
