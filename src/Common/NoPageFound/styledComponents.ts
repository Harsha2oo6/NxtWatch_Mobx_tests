import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? "#181818" : "white")};
`;

export const NoPageImage = styled.img`
  width: 400px;
`;

export const TextContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => (theme.isDark ? "white" : "black")};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#cccccc" : "#475569")};
`;
