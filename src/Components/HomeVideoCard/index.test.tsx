import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeVideoCard from ".";
import userEvent from "@testing-library/user-event";
import VideoDetails from "../VideoDetails";

const testVideoDetails = {
  id: "123fge",
  channel: { profile_image_url: "wfer", name: "FWRF" },
  published_at: "22 Nov 2016",
  thumbnail_url: "jhfjkwhflsajsvlio.jpg",
  title: "huwiehfw",
  view_count: "23 million",
};

describe("homevideoCard", () => {
  test("are all the required fields present in card", () => {
    render(
      <MemoryRouter>
        <HomeVideoCard details={testVideoDetails} />
      </MemoryRouter>
    );
    expect(screen.getByAltText("video thumbnail")).toBeInTheDocument();
    expect(screen.getByAltText("channel profile")).toBeInTheDocument();
    expect(screen.getByText(testVideoDetails.title)).toBeInTheDocument();
    expect(screen.getByText(testVideoDetails.channel.name)).toBeInTheDocument();
    expect(
      screen.getByText(testVideoDetails.view_count + " views")
    ).toBeInTheDocument();
    const publishedDuration = screen.getByTestId("homevideopublishedduration");
    expect(publishedDuration).toBeInTheDocument();
    expect(publishedDuration).toHaveTextContent(/● /);
  });
  test("when clicked is it directed to exact page", async () => {
    render(
      <MemoryRouter>
        <HomeVideoCard details={testVideoDetails} />
      </MemoryRouter>
    );
    const videocard = screen.getByTestId("homeVideoView");
    await userEvent.click(videocard);
    render(<VideoDetails />);
    setTimeout(() => {
      expect(screen.getByTestId("videoDetails")).toBeInTheDocument();
    }, 1000);
  });
});
