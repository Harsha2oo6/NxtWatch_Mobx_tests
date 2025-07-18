import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavlinkWrapper = styled(NavLink)`
  padding-left: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: white;
  color: black;
  transition: background-color 0.3s ease;

  &.active {
    background-color: red;
    color: white;
  }

  &:hover {
    background-color: #ffe6e6;
  }
`;
