import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import VideoDetails from "../VideoDetails";
import GamingView from ".";

const testVideoDetails = {
  id: "123fge",
  thumbnail_url: "jhfjkwhflsajsvlio.jpg",
  title: "huwiehfw",
  view_count: "23 million",
};

describe("trending video card", () => {
  test("are all the required elements present in card", () => {
    render(
      <MemoryRouter>
        <GamingView details={testVideoDetails} />
      </MemoryRouter>
    );
    expect(screen.getByAltText("game")).toBeInTheDocument();
    expect(screen.getByText(testVideoDetails.title)).toBeInTheDocument();
    expect(
      screen.getByText(testVideoDetails.view_count + " Watching Worldwide")
    ).toBeInTheDocument();
  });
  test("when clicked is it directed to exact page", async () => {
    render(
      <MemoryRouter>
        <GamingView details={testVideoDetails} />
      </MemoryRouter>
    );
    const videocard = screen.getByTestId("gamingVideoView");
    await userEvent.click(videocard);
    render(<VideoDetails />);
    setTimeout(() => {
      expect(screen.getByTestId("videoDetails")).toBeInTheDocument();
    }, 1000);
  });
});
