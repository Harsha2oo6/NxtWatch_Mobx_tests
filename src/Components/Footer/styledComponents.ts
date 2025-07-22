import styled from "styled-components";

export const FooterWrapper=styled.div`
height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 20px 20px;
  color:${({theme})=>theme.isDark?'white':'#324053'} ;
  font-weight:bold;
`
export const IconsWrapper=styled.div`
display: flex;
  width: 70%;
  justify-content: space-between;
`
export const H3 = styled.h3``
export const Para = styled.p`

`
export const Icon = styled.div`
  border-radius: 25px;
  padding: 9px;
  width: 40px;
  height: 40px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &.facebook {
    background-color: #3a5896;
  }

  &.twitter {
    background-color: #4ba8ee;
  }

  &.linkedin {
    background-color: #1c74ad;
  }
`;