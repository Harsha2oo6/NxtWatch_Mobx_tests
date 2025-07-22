import { useEffect, useState } from "react";
import {
  VideoDescription,
  DescriptionTop,
  DescriptionDetails,
  DescriptionDate,
  DescriptionBottom,
  ProfileDes,
  ChannelProfile,
  Subscribers,
  ChannelDescription,
  LikeStatusButton,
  LikeDiv,
  VideoDes,
  VideoTitle,
} from "./styledComponents";
import { dashboard } from "../../Stores/Dashboard/dashboard";

import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import VideoPlayer from "../../Services/VideoPlayer";
import { DislikeIcon, LikeIcon, SavedIcon } from "../../Common/Icons";
import { Para } from "../Footer/styledComponents";
import Loader from "../../Common/Loader";
import { DurationFinder } from "../../Services/DateFormating";

type LikeStatus = "liked" | "disliked" | "";

const VideoDetails = observer(() => {
  const { id } = useParams();
  const [likeStatus, setLikeStatus] = useState<LikeStatus>("");
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (id) {
      dashboard.fetchVideoDetails(id);
    }
  }, [id]);

  useEffect(() => {
    if (dashboard.videoDetails?.id) {
      const saved = dashboard.isVideoSaved(dashboard.videoDetails.id);
      setIsSaved(saved);
    }
  }, [dashboard.videoDetails]);

  const details = dashboard.videoDetails;
  
  if (!details) return <Loader/>;

  const {
    video_url,
    title,
    description,
    published_at,
    view_count,
    channel: { name, profile_image_url, subscriber_count },
  } = details;

  const handleLike = () => {
    setLikeStatus((prev) => (prev === "liked" ? "" : "liked"));
  };

  const handleDislike = () => {
    setLikeStatus((prev) => (prev === "disliked" ? "" : "disliked"));
  };

  const handleSave = () => {
    if (!details?.id) return;

    if (dashboard.isVideoSaved(details.id)) {
      dashboard.removeSaved(details.id);
      setIsSaved(false);
    } else {
      dashboard.addSaved();
      setIsSaved(true);
    }
  };

  return (
    <VideoDescription>
      <VideoPlayer url={video_url} />
      <DescriptionTop>
        <VideoTitle>{title}</VideoTitle>
        <DescriptionDetails>
          <DescriptionDate>
            <Para>{view_count} Views</Para>
            <p>● {DurationFinder(published_at)}</p>
          </DescriptionDate>
          <DescriptionDate>
            <LikeStatusButton
              className={likeStatus === "liked" ? "liked" : ""}
              onClick={handleLike}
            >
              <LikeDiv>
                <LikeIcon />
                Like
              </LikeDiv>
            </LikeStatusButton>
            <LikeStatusButton
              className={likeStatus === "disliked" ? "liked" : ""}
              onClick={handleDislike}
            >
              <LikeDiv>
                <DislikeIcon />
                Dislike
              </LikeDiv>
            </LikeStatusButton>
            <LikeStatusButton
              className={isSaved ? "liked" : ""}
              onClick={handleSave}
            >
              <LikeDiv>
                <SavedIcon />
                {isSaved ? "Saved" : "Save"}
              </LikeDiv>
            </LikeStatusButton>
          </DescriptionDate>
        </DescriptionDetails>
      </DescriptionTop>
      <hr />
      <DescriptionBottom>
        <ChannelProfile src={profile_image_url} alt="profile" />
        <ProfileDes>
          <ChannelDescription>
            <VideoTitle>{name}</VideoTitle>
            <Subscribers>{subscriber_count} Subscribers</Subscribers>
          </ChannelDescription>
          <VideoDes>{description}</VideoDes>
        </ProfileDes>
      </DescriptionBottom>
    </VideoDescription>
  );
});

export default VideoDetails;
