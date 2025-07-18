import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 13%;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin:0;
  background-color: white;
  z-index: 2;
`
export const LogoImage=styled.img`
width:${({width})=>width};
height:${({height})=>height}
`
export const ProfileImg=styled.img`
width:30px;
height:30px;
border-radius:50%;
`
export const ActionsWrapper=styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`