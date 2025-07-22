// styledComponents.ts
import styled from 'styled-components';
import { ThemeButton } from '../../Common/ThemeToggler/styledComponents';

export const MenuButton=styled(ThemeButton)`
display:none;
margin-bottom:3px;
font-size:25px;
 @media screen and (max-width:768px){
  display : block;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
  font-size: 35px;
}
`
export const Menu = styled.div`

  background-color: ${({ theme }) => (theme.isDark ? '#2c2c2c' : 'white')};
  color: ${({ theme }) => (theme.isDark ? '#fff' : '#000')};
  border: 1px solid ${({ theme }) => (theme.isDark ? 'grey' : '#dcdcdc')};
  border-radius: 5px;
  padding: 10px 0;
  width: 150px;
  box-shadow: 0 0px 5px grey;
  display: flex;
  flex-direction: column;
  z-index: 10;
  
 
`;

export const MenuItem = styled.p`
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDark ? '#181818' : '#f1f1f1'};
  }
`;
