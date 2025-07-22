import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavlinkWrapper = styled(NavLink)`
  text-decoration: none;
`;
export const NavIconWrapper = styled.div`
  font-size: 21px;
  margin-right: 13px;
`;
export const NavlinkContent = styled.div<{ $isActive?: boolean }>`
  background-color: ${({ $isActive, theme }) =>
    $isActive
      ? theme.isDark
        ? "#444" // dark active
        : "#e7e8e8" // light active
      : theme.isDark
      ? "transparent" // dark inactive
      : "white"}; // light inactive
  padding: 0px 30px;
  margin-bottom: 10px;
  font-weight: 540;
  display: flex;
  justify-content:start;
  align-items: center;
  height: 40px;
  width: 100%;
  color: ${({ theme }) => (theme.isDark ? "white" : "black")};

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDark ? "#cacacaff" : " #f2f1f1ff"};
    color: ${({ theme }) => (theme.isDark ? "black" : "")};
  }
  div {
    color: ${({ $isActive, theme }) =>
      $isActive ? "red" : theme.isDark ? "grey" : "black"};
  }
`;
