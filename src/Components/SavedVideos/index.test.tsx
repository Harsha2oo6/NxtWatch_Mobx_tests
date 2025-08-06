import { dashboard } from "../../Stores/Dashboard/dashboard";
import { render, screen } from "@testing-library/react";
import { runInAction } from "mobx";
import SavedVideos from ".";
import { MemoryRouter } from "react-router-dom";

const testVideoDetails = {
  id: "de32fa84-fb89-410b-bb40-49b473897442",
  title: "Snail bob 3",
  description: "Snail Bob 3 Trailer",
  published_at: "Aug 3, 2020",
  thumbnail_url:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch/Snail-img.png",
  video_url: "https://www.youtube.com/watch?v=eg7Qagz1tgg",
  view_count: "27K",
  channel: {
    name: "HunterHamsterStudio",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/hunter-hamster-studio-img.png",
    subscriber_count: "963",
  },
};

describe("saved Page", () => {
  test("display saved videos ui", () => {
    render(<SavedVideos />);
    expect(screen.getByTestId("Routewrapper")).toBeInTheDocument();
    expect(screen.getByText("Saved Videos")).toBeInTheDocument();
  });

  test("renders saved videos view", async () => {
    runInAction(() => {
      dashboard.savedVideosArray = [
      testVideoDetails
      ];
    });
    render(
      <MemoryRouter>
        <SavedVideos />
      </MemoryRouter>
    );
    expect(screen.getByAltText("thumbnail")).toBeInTheDocument();
    expect(screen.getByAltText("channel profile")).toBeInTheDocument();
    expect(screen.getByText(testVideoDetails.title)).toBeInTheDocument();
    expect(screen.getByText(testVideoDetails.channel.name)).toBeInTheDocument();
    expect(
      screen.getByText(testVideoDetails.view_count + " Views")
    ).toBeInTheDocument();
    const publishedDuration = screen.getByTestId(
      "trendingvideopublishedduration"
    );
    expect(publishedDuration).toBeInTheDocument();
    expect(publishedDuration).toHaveTextContent(/● /);
  });

  test("renders no saved videos view", async () => {
    runInAction(() => {
      dashboard.savedVideosArray = [];
    });
    render(<SavedVideos />);
    expect(await screen.findByTestId("nosavedvideosview")).toBeInTheDocument();
  });
});
