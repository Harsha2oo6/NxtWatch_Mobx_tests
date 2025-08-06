import { useNavigate } from "react-router-dom";
import { type Video } from "../../Types/videos";
import {
  BottomRow,
  ChannelProfile,
  VideoTexts,
  VideoTitle,
  ChannelName,
  VideoViews,
  HomeThumbnail,
  HomeVideoView,
  ChannelDetails,
} from "./styledComponents";
import { DurationFinder } from "../../Services/DateFormating";

const HomeVideoCard = ({ details }: { details: Video }) => {
  const navigate = useNavigate();
  const { id, channel, published_at, thumbnail_url, title, view_count } =
    details;
  const { profile_image_url, name } = channel;

  return (
    <HomeVideoView
    data-testid="homeVideoView"
      onClick={() => {
        navigate(`/videos/${id}`);
      }}
    >
      <HomeThumbnail src={thumbnail_url} alt="video thumbnail" />
      <BottomRow>
        <ChannelProfile src={profile_image_url} alt="channel profile" />
        <VideoTexts>
          <VideoTitle data-testid="homevideotitle">{title}</VideoTitle>
          <ChannelDetails>
          <ChannelName data-testid="homevideoname">{name}</ChannelName>
          <VideoViews>
            <ChannelName data-testid="homevideoviewcount">{view_count} views</ChannelName>
            <ChannelName data-testid="homevideopublishedduration">● {DurationFinder(published_at)}</ChannelName>
          </VideoViews>
          </ChannelDetails>
        </VideoTexts>
      </BottomRow>
    </HomeVideoView>
  );
};

export default HomeVideoCard;
