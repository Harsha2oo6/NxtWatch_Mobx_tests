import { useNavigate } from "react-router-dom";
import { GamingCard, GamingTexts, GamingThumbnail, GamingTitle, GamingViews,   } from "./styledComponents";


export type Video = {
  id: string;
  title: string;
  thumbnail_url: string;
  view_count: string;
};


const GamingView = ({details}:{details:Video}) => {
  const navigate = useNavigate();
  const { id, thumbnail_url, title, view_count } = details;

  return (
    <GamingCard  onClick={() => navigate(`/videos/${id}`)}>
      <GamingThumbnail src={thumbnail_url}  alt="game" />
      <GamingTexts>
        <GamingTitle>{title}</GamingTitle>
        <GamingViews>{view_count} Watching Worldwide</GamingViews>
      </GamingTexts>
    </GamingCard>
  );
};

export default GamingView;
