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
  LabelElement,
} from "./styledComponents";
import { themeStore } from "../../Stores/ThemeStore/themeStore";
import { DarkThemeLogo, LightThemeLogo } from "../../Common/Images";
import ThemeTogler from "../../Common/ThemeToggler";

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
      <Modetoggler >
        <ThemeTogler/>
      </Modetoggler>
      <FormWrapper onSubmit={handleLogin}>
        <LoginLogo
          src={themeStore.isDark ? DarkThemeLogo : LightThemeLogo}
          alt="Nxtwatch"
        />
        <InputWrapper>
          <LabelElement htmlFor="username">USERNAME</LabelElement>
          <LoginIputBar
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <LabelElement htmlFor="password">PASSWORD</LabelElement>
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
          <LabelElement htmlFor="showpass">Show Password</LabelElement>
        </ShowPassWrapper>
        <LoginButton type="submit">Login</LoginButton>
        {loginStore.error && <ErrorTag>{loginStore.error}</ErrorTag>}
      </FormWrapper>
    </LoginPageWrapper>
  );
});
export default LoginPage;
