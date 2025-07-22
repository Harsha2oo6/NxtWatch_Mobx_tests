import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? "#161712" : "#f8f8f4ff")};
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
export const SearchInput = styled.input`
  background-color: ${({ theme }) => (theme.isDark ? "#161712" : "")};
  width: 34%;
  padding: 10px;
  z-index:2;
  color: ${({ theme }) => (theme.isDark ? "#fefefeff" : "black")};
  border: 2px solid ${({ theme }) => (theme.isDark ? "#41423d" : "#ccccca")};
  @media screen and (max-width:576px){
  width:80%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
  width: 68%;
}

`;
export const SearchButton = styled.button`
  width: 5%;
  color: ${({ theme }) => (theme.isDark ? "#acacaaff" : "black")};
  background-color: ${({ theme }) => (theme.isDark ? "#363634" : "#f2f3f0")};
  border: 2px solid ${({ theme }) => (theme.isDark ? "#41423d" : "#ccccca")};
  margin-left: -2px;
  padding-top: 5px;
  font-size: 16px;
  @media screen and (max-width:576px){
  width:20%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
  width: 13%;
}
`;
export const HomeVideos = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  width:100%;
  // justify-content:center;
  align-items: center;
  align-self:start;
  overflow-x: auto;
  height:100%;
  @media screen and (max-width:576px){
  padding:0;
  gap:0
  }
`;
