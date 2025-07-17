import { useNavigate } from "react-router-dom";
import { loginStore } from "../../LoginStore/loginstore";

const Home = () => {
    const navigate =useNavigate()
    if(!loginStore.getToken()){
        navigate('/login')
    }

  return (
    <>
      <h1>this is home</h1>
      <button onClick={()=>loginStore.logout()}>logout</button>
    </>
  );
};
export default Home;
