import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavlinkWrapper = styled(NavLink)`
  text-decoration: none;
`;
export const NavIconWrapper = styled.div`
font-size:21px;
margin-right:12px`;
export const NavlinkContent = styled.div<{ $isActive?: boolean }>`
padding:0px 30px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: ${({ $isActive }) => ($isActive ? "#e7e8e8" : "white")};
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f1f1ff;
  }
  div {
    color: ${({ $isActive }) => ($isActive ? "red" : "black")};
  }
`;
