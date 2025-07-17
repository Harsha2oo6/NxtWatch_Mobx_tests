import LoginPage from "./Components/LoginPage"
import { Routes,Route } from "react-router-dom";
import { HomePath,LoginPath } from "./Constants/Paths";
import Home from "./Components/Home";
import ProtectedRoute from "./Services/ProtectedRoute";

function App() {

  return (
    <>
    <Routes>
        <Route path={HomePath} element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path={LoginPath} element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
