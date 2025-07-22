import styled from "styled-components";

export const NoSaveWrapper = styled.div`
  width:100%;
  height:90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 20px;
  @media screen and (max-width:576px){
  height:80%;
  }
`;

export const NoSavedImage = styled.img`
  width: 400px;
  max-width: 90%;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => (theme.isDark ? "white" : "black")};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#cccccc" : "#475569")};
`;
