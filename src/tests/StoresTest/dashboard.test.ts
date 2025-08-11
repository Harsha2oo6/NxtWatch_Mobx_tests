import { describe, it, expect, beforeEach } from "vitest";
import { dashboard } from "../../Stores/Dashboard/dashboard";

// Mock localStorage for saved videos
beforeEach(() => {
  localStorage.clear();
  dashboard.savedVideosArray = [];
  dashboard.homeVideosArray = [];
  dashboard.trendingVideosArray = [];
  dashboard.gamingVideosArray = [];
  dashboard.videoDetails = null;
  dashboard.searchQuery = "";
});

describe("Dashboard Store", () => {
  it("sets search query", () => {
    dashboard.setSearchQuery("test");
    expect(dashboard.searchQuery).toBe("test");
  });

  it("adds and removes saved videos", () => {
    dashboard.videoDetails = {
      id: "1",
      title: "title",
      description: "desc",
      video_url: "",
      view_count: "1",
      published_at: "",
      thumbnail_url: "",
      channel: { name: "chan", profile_image_url: "", subscriber_count: "1" },
    };
    dashboard.addSaved();
    expect(dashboard.savedVideosArray.length).toBe(1);
    dashboard.removeSaved("1");
    expect(dashboard.savedVideosArray.length).toBe(0);
  });

  it("checks if video is saved", () => {
    dashboard.videoDetails = {
      id: "2",
      title: "title",
      description: "desc",
      video_url: "",
      view_count: "1",
      published_at: "",
      thumbnail_url: "",
      channel: { name: "chan", profile_image_url: "", subscriber_count: "1" },
    };
    dashboard.addSaved();
    expect(dashboard.isVideoSaved("2")).toBe(true);
    expect(dashboard.isVideoSaved("3")).toBe(false);
  });

  it("does not add duplicate saved videos", () => {
    dashboard.videoDetails = {
      id: "4",
      title: "title",
      description: "desc",
      video_url: "",
      view_count: "1",
      published_at: "",
      thumbnail_url: "",
      channel: { name: "chan", profile_image_url: "", subscriber_count: "1" },
    };
    dashboard.addSaved();
    dashboard.addSaved();
    expect(dashboard.savedVideosArray.length).toBe(1);
  });
});
