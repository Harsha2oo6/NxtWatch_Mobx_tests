import { makeAutoObservable, runInAction } from "mobx";
import { LoginService } from "../../Services/LoginServices";
import Cookies from "js-cookie";

type LoginResponse={
  jwt_token:string
}
class LoginStore {
  username: string = "";
  token: string = "";
  showPassword: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
   const storedToken=Cookies.get('jwt_token');
   const storedUsername=Cookies.get('username')
    if (storedToken&&storedUsername){
      this.username=storedUsername;
      this.token=storedToken;
    }
  }

  async login(username: string, password: string) {
    try {
      const result:LoginResponse = await LoginService({ username, password });

      runInAction(() => {
        this.username = username;
        this.token = result.jwt_token;
        this.error = "";

        Cookies.set('jwt_token',result.jwt_token);
        Cookies.set('username',username)
      });
    } catch (e: unknown) {
      runInAction(() => {
        if (typeof e === "object") {
          const { error_msg } = e as any
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

    Cookies.remove('jwt_token')
    Cookies.remove('username')
  }
}

export const loginStore = new LoginStore();
