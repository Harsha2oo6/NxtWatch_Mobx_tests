import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({theme})=>theme.isDark?'#212121':'white'};
  border-radius: 5px;
  width: 350px;
  height: 200px;
  color: #0c4077;
  font-weight: 550;
  box-shadow: 0 0 3px 0 grey;
`;
export const PopupButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 10px;
  font-weight: 600;
  transition: 500ms all;
  &:hover {
    transform: scale(1.05);
  }

  &.logout {
  display:none;
    border: 2px solid
      ${({ theme }) => (theme.isDark ? "white" : "rgb(68, 119, 238)")};
    color: ${({ theme }) => (theme.isDark ? "white" : "rgb(68, 119, 238)")};
    height: 30px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) =>
        theme.isDark ? "white" : "rgb(68, 119, 238)"};
      color: ${({ theme }) => (theme.isDark ? "black" : "white")};
      transform: none;
    }
      @media screen and (min-width:768px){
      display:block;
      }
  }

  &.close {
    background-color: transparent;
    border: 2px solid ${({theme})=>theme.isDark?'#8a98ab':'#8696a8'} ;
    color:  ${({theme})=>theme.isDark?'#8a98ab':'#8696a8'};
  }
  &.confirm {
    background-color: #2082f2;
    color: white;
    border: 0;
  }
`;
export const RowDiv = styled.div`
  display: flex;
  flex: row;
`;
export const Sure=styled.p`
color:${({theme})=>theme.isDark?'#f1f2f4':'#173870'}
`