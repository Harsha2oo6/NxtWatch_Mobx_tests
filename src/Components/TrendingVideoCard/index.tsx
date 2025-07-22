import { useNavigate } from "react-router-dom";
import type { Video } from "../../Types/videos";

import {
  TrendingCard,
  TrendingChannelName,
  TrendingThumbnail,
  TrendingTitle,
  TrendingVideoTexts,
  ChannelProfile,
} from "./styledComponents";

import { ChannelDetails, VideoViews } from "../HomeVideoCard/styledComponents";
import { DurationFinder } from "../../Services/DateFormating";

type Props = {
  details: Video;
};

const TrendingVideoCard = ({ details }: Props) => {
  const navigate = useNavigate();
  const { id, channel, published_at, title, thumbnail_url, view_count } = details;
  const { profile_image_url, name } = channel;

  return (
    <TrendingCard onClick={() => navigate(`/videos/${id}`)}>
      <TrendingThumbnail src={thumbnail_url} alt="thumbnail" />

      <TrendingVideoTexts>
        <ChannelProfile src={profile_image_url} alt="channel profile" />

        <div>
          <TrendingTitle>{title}</TrendingTitle>

          <ChannelDetails>
            <TrendingChannelName>{name}</TrendingChannelName>
            <VideoViews>
              <TrendingChannelName>{view_count} Views</TrendingChannelName>
              <TrendingChannelName>● {DurationFinder(published_at)}</TrendingChannelName>
            </VideoViews>
          </ChannelDetails>
        </div>
      </TrendingVideoTexts>
    </TrendingCard>
  );
};

export default TrendingVideoCard;
