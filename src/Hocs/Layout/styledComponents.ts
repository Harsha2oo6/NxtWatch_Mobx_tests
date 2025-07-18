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
  height:100vh;
//   box-sizing: border-box;
`;
export const NavContentWrapper=styled.div`
display:flex;
height:87%;
`