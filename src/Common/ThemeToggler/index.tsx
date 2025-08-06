import { observer } from "mobx-react-lite";
import { themeStore } from "../../Stores/ThemeStore/themeStore";
import { DarkmodeIcon,LightmodeIcon } from "../../Common/Icons";
import { ThemeButton } from "./styledComponents";

const ThemeTogler = observer(() => {
    const {toggleMode}=themeStore;

  return (
    <ThemeButton
    data-testid="themeToggler"
      onClick={toggleMode}
    >
      {themeStore.isDark ? <LightmodeIcon/> : <DarkmodeIcon/> }
    </ThemeButton>
  );
});
export default ThemeTogler;