import styled from "styled-components";

export const VideoDescription = styled.div`
  width: 100%;
  padding: 25px 20px;
  background-color: ${({ theme }) => (theme.isDark ? "#1f201b" : "#f9f9f9")};

  @media screen and (max-width: 576px) {
    padding:0;
  }
`;

export const DescriptionTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;

  @media screen and (max-width: 576px) {
    padding: 10px  15px;
  }
`;

export const DescriptionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const DescriptionDate = styled.div`
  display: flex;
  align-items: center;
  color: #6e7e92;
  gap: 10px;
  font-size: 15px;

  @media screen and (max-width: 576px) {
    justify-content: flex-start;
    gap: 20px;
    width:70%
  }
`;

export const DescriptionBottom = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 20px;
  align-items: flex-start;

  @media screen and (max-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProfileDes = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const VideoDes = styled.p`

  margin-top: 15px;
  line-height: 1.5;
  color: ${({ theme }) => (theme.isDark ? "#efececff" : "#6a7587")};
  font-size: 14px;

   @media screen and (max-width: 576px) {
    margin-left:-60px;
    font-weight:400;
    font-size:18px;
    padding:10px ;
  }
`;

export const VideoTitle = styled.h4`
  color: ${({ theme }) => (theme.isDark ? "#efececff" : "#1e293b")};
  font-size: 18px;
  margin-bottom: 6px;

  @media screen and (max-width: 576px) {
    font-size: 20px;
    line-height:30px;
  }
`;

export const ChannelProfile = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 30px;

  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

export const Subscribers = styled.p`
  color: #6e7e92;
  font-size: 14px;
`;

export const ChannelDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55px;
`;

export const LikeStatusButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  margin-right: 10px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => (theme.isDark ? "#6e7e92" : "#1e293b")};

  &.liked {
    color: #0953a9;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const LikeDiv = styled.div`
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    font-size: 18px;
    justify-content: flex-start;
    
  }
`;
