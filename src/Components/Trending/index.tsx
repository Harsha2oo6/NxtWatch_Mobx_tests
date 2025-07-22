import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import { PageWrapper } from "../Home/styledWrapper";
import RouteHeader from "../../Common/RouteHeader";
import TrendingVideoCard from "../TrendingVideoCard";
import { TrendingVideos } from "./styledComponents";
import Loader from "../../Common/Loader";
import RenderFailure from "../../Common/FailurePage";

export const RenderTrendingVideos = observer(() => {
  if (dashboard.isTrendingLoading) {
    return <Loader />;
  }
  if (dashboard.trendingError!==''){
    return <RenderFailure onRetry={()=>dashboard.fetchTrendingVideos(true)}/>
  }
  
  return (
    <>
      {dashboard.trendingVideosArray.map((each: any) => (
        <TrendingVideoCard key={each.id} details={each} />
      ))}
    </>
  );
});

const Trending = observer(() => {
  useEffect(() => {
    if (dashboard.trendingVideosArray.length === 0) {
      dashboard.fetchTrendingVideos();
    }
  }, []);

  return (
    <PageWrapper>
      <RouteHeader routeName={"Trending"} />
      <TrendingVideos>
        <RenderTrendingVideos />
      </TrendingVideos>
    </PageWrapper>
  );
});

export default Trending;
