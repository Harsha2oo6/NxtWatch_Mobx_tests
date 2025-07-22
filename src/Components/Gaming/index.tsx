import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import RouteHeader from "../../Common/RouteHeader";
import { dashboard } from "../../Stores/Dashboard/dashboard";
import { PageWrapper } from "../Home/styledWrapper";
import GamingView from "../GamingVideoCard";
import Loader from "../../Common/Loader";
import RenderFailure from "../../Common/FailurePage";
import { GamingVideos } from "./styledComponents";

export const RenderGamingVideos = observer(() => {
  if (dashboard.isGamingLoading) {
    return <Loader />;
  }
  if (dashboard.gamingError!==''){
    return <RenderFailure onRetry={()=>dashboard.fetchGamingVideos(true)}/>
  }

  if (dashboard.gamingVideosArray.length === 0) {
    return <p>No videos found</p>;
  }

  return (
    <>
      {dashboard.gamingVideosArray.map((each: any) => (
        <GamingView key={each.id} details={each} />
      ))}
    </>
  );
});

const Gaming = observer(() => {
  useEffect(() => {
    if (dashboard.gamingVideosArray.length === 0) {
      dashboard.fetchGamingVideos();
    }
  }, []);

  return (
    <PageWrapper>
      <RouteHeader routeName="Gaming" />
      <GamingVideos>
        <RenderGamingVideos />
      </GamingVideos>
    </PageWrapper>
  );
});

export default Gaming;
