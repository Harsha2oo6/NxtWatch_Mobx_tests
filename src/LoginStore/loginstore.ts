import { makeAutoObservable, runInAction } from "mobx";
import { LoginService } from "../Services/LoginServices";

class LoginStore {
  username: string = "";
  token: string = "";
  showPassword: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    try {
      const result = await LoginService({ username, password });

      runInAction(() => {
        this.username = username;
        this.token = result.jwt_token;
        this.error = "";
      });
    } catch (e: unknown) {
      runInAction(() => {
        if (typeof e === "object") {
          const { error_msg } = e as { error_msg: string };
          this.error = error_msg;
        }

        this.token = "";
      });
    }
  }
  getToken() {
    return this.token;
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  logout() {
    this.token = "";
    this.username = "";
    this.error = "";
  }
}

export const loginStore = new LoginStore();
