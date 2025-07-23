import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? "#1f201b" : "#f9f9f9")};
`;

export const FormWrapper = styled.form`
  width: 350px;
  padding: 40px 30px;
  background-color: ${({ theme }) => (theme.isDark ? "#0f0f0f" : "#ffffff")};
  border-radius: 12px;
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? "0px 4px 16px 0px rgba(0, 0, 0, 0.5)"
      : "0px 4px 16px 0px rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginLogo = styled.img`
  width: 120px;
  align-self: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelElement = styled.label`
  font-size: 12px;
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#616e7c")};
  font-weight: 600;
`;

export const LoginIputBar = styled.input`
  height: 38px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#000000")};
  font-size: 14px;
  margin-top:6px;
`;

export const ShowPassWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  align-self: start;
  gap: 8px;
  height:30px;
  margin-top: -8px;
  margin-bottom: -5px;
`;

export const CheckBox = styled.input`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  height: 38px;
  width: 100%;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Modetoggler = styled.div`
width:50px;
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 2px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 0px 5px 0px grey;
  cursor: pointer;
  font-size: 14px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ErrorTag = styled.p`
  font-size: 12px;
  color: red;
  margin-top: -10px;
  margin-bottom: 0;
`;
