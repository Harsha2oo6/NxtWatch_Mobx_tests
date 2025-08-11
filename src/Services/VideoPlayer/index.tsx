import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <ReactPlayer
      data-testid="videoPlayer"
      src={url}
      controls
      width="100%"
      height="350px"
    />
  );
};

export default VideoPlayer;
