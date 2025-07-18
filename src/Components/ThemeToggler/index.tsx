import { observer } from "mobx-react-lite";
import { themeStore } from "../../Stores/ThemeStore/themeStore";
import { Darkmodeicon, Lightmodeicon } from "../../Common/Icons";
import { ThemeButton } from "./styledComponents";

const ThemeTogler = observer(() => {
    const {toggleMode}=themeStore;

  return (
    <ThemeButton
      onClick={toggleMode}
    >
      {themeStore.isDark ? Lightmodeicon : Darkmodeicon}
    </ThemeButton>
  );
});
export default ThemeTogler;