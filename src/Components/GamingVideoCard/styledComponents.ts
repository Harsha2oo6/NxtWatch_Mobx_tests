import styled from "styled-components";

export const GamingCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
  height: 400px;
  @media screen and (max-width: 576px) {
    width: 47%;
  }
   
`;
export const GamingThumbnail = styled.img`
  width: 100%;
  height: 83%;
`;
export const GamingTexts = styled.div`
  display: flex;
  margin: 16px 0px 0px 0px;
  flex-grow: 1;
  flex-direction: column;
`;
export const GamingTitle = styled.h2`
  color: ${({ theme }) => (theme.isDark ? "#fdfcfcff" : "#1f2d3f")};
  margin-bottom: 5px;
`;
export const GamingViews = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#4f687f" : "#4f5e6c")};
  @media screen and (max-width: 576px) {
    line-height: 30px;
    font-size: 22px;
  }
`;
