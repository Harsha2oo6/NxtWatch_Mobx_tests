import styled from "styled-components";

export const ThemeButton = styled.button`
  font-size:30px;
  margin-top:6px;
  color:${({theme})=>theme.isDark?'white':'black'};
  border: 0;
  background-color: transparent;
  @media screen and (min-width: 577px) and (max-width: 768px) {
  font-size: 43px;
}
`;
