import styled from "styled-components";
import { RowDiv } from "../LogoutPopup/styledComponents";
import { VideoTexts } from "../HomeVideoCard/styledComponents";


export const TrendingCard = styled(RowDiv)`
  width: 100%;
  height: 280px;
  gap: 20px;

  @media screen and (max-width: 577px) {
    flex-wrap: wrap;
    height: auto;
    align-items: flex-start;
    margin-bottom:30px;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;


export const TrendingThumbnail = styled.img`
  width: 480px;

  @media screen and (max-width: 577px) {
    width: 100%;
    height: 250px;
    
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 55%;
    height: 230px;
  }
`;

export const TrendingTitle = styled.h2`
  font-size: 23px;
  color: ${({ theme }) => (theme.isDark ? '#f7f8f3ff' : '#1e293a')};

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;


export const TrendingChannelName = styled.p`
  color: ${({ theme }) => (theme.isDark ? '#89a2b5' : '#65768a')};
  margin: 10px 15px 0px 0px;
`;

export const TrendingVideoTexts = styled(VideoTexts)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15px;
  padding: 10px;
  flex: 1;

  @media screen and (max-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ChannelProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display:none;

  @media screen and (max-width: 576px) {
  display:block;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
`;
