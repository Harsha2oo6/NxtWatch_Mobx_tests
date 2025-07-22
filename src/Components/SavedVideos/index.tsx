import NoSavedVideos from "../../Common/NoSavedVideos";
import RouteHeader from "../../Common/RouteHeader";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import { PageWrapper } from "../Home/styledWrapper";
import { TrendingVideos } from "../Trending/styledComponents";
import TrendingVideoCard from "../TrendingVideoCard";

export const RenderSavedVideos=()=>{
    if (dashboard.savedVideosArray.length === 0) {
    return <NoSavedVideos/>;
  }

  return (
    <>
      {dashboard.savedVideosArray.map((each: any) => (
        <TrendingVideoCard key={each.id} details={each} />
      ))}
    </>
  );
}
const SavedVideos = () => {
  return (
    <PageWrapper>
      <RouteHeader routeName={"Saved Videos"} />
      <TrendingVideos>
        <RenderSavedVideos />
      </TrendingVideos>
    </PageWrapper>
  );
};
export default SavedVideos;
