import { observer } from "mobx-react-lite";
import { ActionsWrapper, HeaderWrapper, LogoImage, ProfileImg } from "./styledComponents";
// import { loginStore } from "../../Stores/LoginStore/loginstore";
import { useNavigate } from "react-router-dom";
import { LightThemeLogo, ProfileImage } from "../../Common/Logos";
import ThemeTogler from "../ThemeToggler";
import LogoutPopup from "../LogoutPopup";
const Header = observer(() => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <LogoImage
        height="40px"
        width="150px"
        onClick={() => navigate("/")}
        src={LightThemeLogo}
        className="header-logo"
        alt="header-logo"
      />
      <ActionsWrapper>
        <ThemeTogler />
        <ProfileImg src={ProfileImage} alt="profile" />
        <LogoutPopup/>
      </ActionsWrapper>
    </HeaderWrapper>
  );
});
export default Header;
