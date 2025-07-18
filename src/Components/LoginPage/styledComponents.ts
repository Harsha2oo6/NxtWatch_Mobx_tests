import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 5px 0 grey;
  // border: 2px solid red;
`;
export const LoginIputBar = styled.input`
  height: 33px;
  width: 100%;
  border: 2px solid lightgrey;
  border-radius: 5px;
`;
export const LoginLogo = styled.img`
  width: 200px;
  height: 50px;
`;
export const LoginButton = styled.button`
  width: 80%;
  height: 35px;
  background-color: rgb(68, 119, 238);
  color: white;
  font-weight: 550;
  border: 0;
  border-radius: 10px;
  &:hover {
    background-color: rgb(52, 108, 239);
  }
`;
export const Modetoggler = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  border: 2px solid darkgray;
  border-radius: 50%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ErrorTag = styled.p`
  color: red;
  margin:0;
  font-size: 13px;
`;
export const LoginPageWrapper = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const InputWrapper=styled.div`
display: flex;
  flex-direction: column;
  width: 80%;
  color: gray;
`
export const CheckBox=styled.input`
`
export const ShowPassWrapper = styled.div`
 margin-top: 10px;
  font-size: 15px;
  color: black;
  font-weight: 550;
`