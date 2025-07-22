import ReactPlayer from "react-player";

const VideoPlayer = ({url}:{url:string}) => {
  console.log(url)
  return (

      <ReactPlayer
        src={url}
        controls
        width='100%'
        height='350px'
      />
    
  );
};

export default VideoPlayer;