import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 10%;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? "#1f201b" : "#ffffff")};
  // border-bottom: 1px solid white;
  //   ${({ theme }) => (theme.isDark ? "#313131" : "#e2e8f0")};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const LogoImage = styled.img`
  width:120px;
  height:30px;
  cursor: pointer;
  @media screen and (min-width: 577px) and (max-width: 768px) {
  width:150px;
  height:50px;
}
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  display:none;
  @media screen and (min-width:768px){
  display:block}
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
`;

