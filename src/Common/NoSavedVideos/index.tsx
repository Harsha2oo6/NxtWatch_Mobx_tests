import { NoSaveWrapper, NoSavedImage, Heading, Paragraph } from "./styledComponents";

const NoSavedVideos = () => {
  return (
    <NoSaveWrapper>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="noSavedVideos"
      />
      <Heading>No Saved Videos Found</Heading>
      <Paragraph>You can save your videos while watching them.</Paragraph>
    </NoSaveWrapper>
  );
};

export default NoSavedVideos;
