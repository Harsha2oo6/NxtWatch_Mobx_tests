import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    overflow-x: hidden;
  }
    
`;

export const LayoutWrapper = styled.div`
  max-width: 100vw;
  margin: 0;
  padding: 0;
  height: 100vh;
  
`;
export const NavContentWrapper = styled.div`
  display: flex;
  height: 91%;

  > *:nth-child(2) {
    flex: 1;
    overflow-y: auto;

    scrollbar-width: thin; 
    scrollbar-color: grey ${({ theme }) => (theme.isDark ? '#3c3c3c' : '#f8f8f4')};


    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => (theme.isDark ? '#3c3c3c' : '#f8f8f4')};
    }

    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 10px;
      transition: background-color 0.3s ease;
    }

  }
`;
