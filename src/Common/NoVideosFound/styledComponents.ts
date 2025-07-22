import styled from "styled-components";

export const NoVideosWrapper = styled.div`
  flex: 1;
  // min-height: 70vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  background-color: ${({ theme }) => (theme.isDark ? "#181818" : "#f8f8f4")};
`;


export const NoVideosImage = styled.img`
  width: 450px;
  @media screen and (max-width:576px)  {
    width: 250px;
    margin: 30px 0px;
  }
  @media screen and (min-width:576px) and (max-width: 768px) {
    width: 350px;
    margin: 50px 0px;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => (theme.isDark ? "#e0e0e0" : "#1e293b")};
  font-size: 38px;
  margin-bottom: 10px;
  @media screen and (max-width:576px)  {
    margin-bottom:10px;
    font-size:30px;
  }
  @media screen and (min-width:576px) and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SubText = styled.h5`
  color: ${({ theme }) => (theme.isDark ? "#a0a0a0" : "#475569")};
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 30px;
  @media screen and (max-width:576px)  {
    margin-bottom:10px;
    font-size:20px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const RetryButton = styled.button`
padding:10px 20px;
  width: 120px;
  background-color: #4a47e0;
  color: white;
  font-weight: 500;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
    @media screen and (max-width:576px)  {
    padding: 10px 15px;
  }
  @media screen and (min-width:576px) and  (max-width: 768px) {
    padding: 15px 20px;
  }
`;
