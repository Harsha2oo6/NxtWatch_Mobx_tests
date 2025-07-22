import { makeAutoObservable } from "mobx";

type themeModes = "light" | "dark";

class ThemeStore {
  theme: themeModes = "light";

  constructor() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.theme = savedTheme;
    }
    makeAutoObservable(this);
  }
  toggleMode = () => {
    this.theme = this.theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", this.theme);
  };
  get isDark() {
    return this.theme === "dark";
  }
}
export const themeStore = new ThemeStore();

export interface MyTheme {
  isDark: boolean;
}

