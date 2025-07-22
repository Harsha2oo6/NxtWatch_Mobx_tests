import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Advertisement from "../Advertisement";
import HomeVideoCard from "../HomeVideoCard";
import { SearchIcon } from "../../Common/Icons";
import { dashboard } from "../../Stores/Dashboard/dashboard";

import {
  HomeVideos,
  PageWrapper,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./styledWrapper";
import Loader from "../../Common/Loader";
import { RenderNoVideosView } from "../../Common/NoVideosFound";
import RenderFailure from "../../Common/FailurePage";

export const RenderHomeVideos = observer(() => {
  if (dashboard.isHomeLoading) {
    return <Loader />;
  }

  if (dashboard.homeError !== "") {
    return <RenderFailure onRetry={() => dashboard.fetchHomeVideos(true)} />;
  }

  if (dashboard.homeVideosArray.length === 0) {
    return <RenderNoVideosView />;
  }

  return (
    <HomeVideos>
      {dashboard.homeVideosArray.map((each: any) => (
        <HomeVideoCard key={each.id} details={each} />
      ))}
    </HomeVideos>
  );
});


const Home = observer(() => {
  useEffect(() => {
    if (dashboard.homeVideosArray.length === 0) {
      dashboard.fetchHomeVideos();
    }
  }, []);

  return (
    <PageWrapper>
      <Advertisement />
      <SearchWrapper>
        <SearchInput
          placeholder="Search"
          type="search"
          value={dashboard.searchQuery}
          onChange={(e) => dashboard.setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={() => dashboard.fetchHomeVideos(true)}>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
        <RenderHomeVideos />
    </PageWrapper>
  );
});

export default Home;
