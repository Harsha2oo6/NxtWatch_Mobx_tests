import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  LogoImage,
  ProfileImg,
  ActionsWrapper,
} from "./styledComponents";
import {
  DarkThemeLogo,
  LightThemeLogo,
  ProfileImage,
} from "../../Common/Images";
import ThemeTogler from "../../Common/ThemeToggler";
import LogoutPopup from "../LogoutPopup";
import { themeStore } from "../../Stores/ThemeStore/themeStore";
import MobileNavigator from "../MobileNavigator";

const Header = observer(() => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper data-testid="Header">
      <LogoImage
        onClick={() => navigate("/")}
        src={themeStore.isDark ? DarkThemeLogo : LightThemeLogo}
        alt="header-logo"
      />
      <ActionsWrapper>
        <ThemeTogler />
        <ProfileImg src={ProfileImage} alt="profile" />
        <MobileNavigator/>
        <LogoutPopup />
      </ActionsWrapper>
    </HeaderWrapper>
  );
});

export default Header;
