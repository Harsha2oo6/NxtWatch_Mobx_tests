import { observer } from "mobx-react-lite";
import { useState } from "react";
import { loginStore } from "../../LoginStore/loginstore";
import { useNavigate } from "react-router-dom";

const LoginPage = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("inputs sent");
    await loginStore.login(username, password);
    if(loginStore.getToken()){
        navigate('/')
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type={loginStore.showPassword?"text":"password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
        <input type="checkbox" onChange={()=>loginStore.toggleShowPassword()}/>
      <button type="submit">Login</button>
    </form>
  );
});
export default LoginPage;
