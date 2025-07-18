import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
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
  border-radius: 5px;
  margin: 10px;
  font-weight: 600;
  transition: 500ms all;
  &:hover {
    transform: scale(1.05);
  }

  &.logout {
    border: 2px solid rgb(68, 119, 238);
    color: rgb(68, 119, 238);
    height: 30px;
    background-color: transparent;
    &:hover {
      background-color: rgb(37, 99, 244);
      color: white;
      transform: none;
    }
  }

  &.close {
    background-color: transparent;
    border: 2px solid #8696a8;
    color: #8696a8;
  }
  &.confirm {
    background-color: #2082f2;
    color: white;
    border: 0;
  }
`;
