import styled from "styled-components";
import { HomeVideos } from "../Home/styledWrapper";

export const TrendingVideos = styled(HomeVideos)`
  padding: 50px;
  // flex-direction:column;
  @media screen and (max-width:577px) {
  padding:0;
  }
`;
