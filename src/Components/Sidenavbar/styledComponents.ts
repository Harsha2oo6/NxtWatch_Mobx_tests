import styled from "styled-components";

export const SideNavbarWrapper = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: ${({ theme }) => (theme.isDark ? "#1f201b" : "white")};
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItemsWrapper = styled.nav`
  margin-top: 30px;
`;
