import { observer } from "mobx-react-lite";
import { useState, type FormEvent } from "react";
import { loginStore } from "../../Stores/LoginStore/loginstore";
import { useNavigate } from "react-router-dom";
import {
  FormWrapper,
  LoginButton,
  LoginIputBar,
  LoginLogo,
  ErrorTag,
  Modetoggler,
  LoginPageWrapper,
  InputWrapper,
  CheckBox,
  ShowPassWrapper,
} from "./styledComponents";
import { themeStore } from "../../Stores/ThemeStore/themeStore";

const LoginPage = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  if (loginStore.getToken() !== "") {
    navigate("/", { replace: true });
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log("inputs sent");
    await loginStore.login(username, password);
  };
  return (
    <LoginPageWrapper>
      <Modetoggler onClick={() => themeStore.toggleMode()}>
        {themeStore.isDark ? "Light" : "Dark"}
      </Modetoggler>
      <FormWrapper onSubmit={handleLogin}>
        <LoginLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="Nxtwatch"
        />
        <InputWrapper>
          <label htmlFor="username">USERNAME</label>
          <LoginIputBar
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">PASSWORD</label>
          <LoginIputBar
            type={loginStore.showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <ShowPassWrapper>
          <CheckBox
            id="showpass"
            type="checkbox"
            onChange={() => loginStore.toggleShowPassword()}
          />
          <label htmlFor="showpass">Show Password</label>
        </ShowPassWrapper>
        <LoginButton type="submit">Login</LoginButton>
        {loginStore.error && <ErrorTag>{loginStore.error}</ErrorTag>}
      </FormWrapper>
    </LoginPageWrapper>
  );
});
export default LoginPage;
