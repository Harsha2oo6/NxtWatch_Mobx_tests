import styled from "styled-components";

export const HomeVideoView = styled.div`
  width: 29%;
  height: 280px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 45%;
  }
`;

export const HomeThumbnail = styled.img`
  width: 100%;
  height: 60%;
  display: block;
  @media screen and (min-width: 577px) and (max-width: 768px) {
  height:50%;
}
`;
export const BottomRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  @media screen and (max-width: 576px) {
    margin: 0;
    padding: 15px 10px;
  }
`;
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction:column;
  @media screen and (max-width:576px){
  flex-direction:row;
  }
`;
export const ChannelProfile = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const VideoTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoTitle = styled.p`
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => (theme.isDark ? "#efedebff" : "#494b4f")};
  line-height: 1.4;
  margin: 0 0 6px 0;
  @media screen and (min-width: 577px) and (max-width: 768px) {
  font-size: 10px;
  font-weight:400;
}
`;

export const ChannelName = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => (theme.isDark ? "#666a7f" : "#606060")};
  margin: 0px 10px 10px 0px;
  @media screen and (min-width: 577px) and (max-width: 768px) {
  font-size: 10px;
}
`;

export const VideoViews = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 576px) {
    gap: 10px;
  }
`;
