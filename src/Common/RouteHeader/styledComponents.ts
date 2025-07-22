import styled from "styled-components";

export const RouteHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? "#181818" : "#f1f1f1")};
  height: 120px;
  padding: 25px 25px 25px 50px;
    @media screen and (max-width:576px){
    padding: 25px;

  }
`;
export const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  font-size: 30px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? "#0f0f0f" : "#e1e9f0")};
  margin-right: 20px;
  
`;
export const RouteName=styled.h1`
color:${({theme})=>theme.isDark?'#f8fbfc':'#1c293a'} ;
  width: 500px;
  @media screen and (max-width:576px){
  width:250px;
  }
`