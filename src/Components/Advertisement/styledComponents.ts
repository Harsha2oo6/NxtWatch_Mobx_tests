import styled from "styled-components";

export const AdvertisementWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px ;
  position: relative;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const AddRemoveButton = styled.button`
  position: absolute;
  top: 15px;
  right: 80px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;

  @media screen and (max-width: 576px) {
    font-size: 18px;
    top: 15px;
    right: 15px;
  }
`;

export const AdvertisementPara = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #3f4b52;
  max-width: 400px;
  margin-top: 10px;

  @media screen and (max-width: 576px) {
    font-size: 15px;
    max-width: 80%;
  }
`;

export const GetItNow = styled.button`
  margin-top: 20px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #3f4b52;
  background-color: transparent;
  border: 2px solid #3f4b52;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #3f4b52;
    color: white;
  }
`;
