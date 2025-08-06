import { makeAutoObservable } from "mobx";

type themeModes = "light" | "dark";

export class ThemeStore {
  theme: themeModes;

  constructor() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.theme = savedTheme;
    } else {
      this.theme = "light";
      localStorage.setItem("theme", this.theme);
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
  get themeMode() {
    return this.theme;
  }
}
export const themeStore = new ThemeStore();

export interface MyTheme {
  isDark: boolean;
}
