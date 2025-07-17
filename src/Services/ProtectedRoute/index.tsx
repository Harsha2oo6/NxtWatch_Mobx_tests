import { Navigate } from "react-router-dom"
import { loginStore } from "../../LoginStore/loginstore"
import type { JSX } from "react/jsx-runtime"

type Props={
    children:JSX.Element
}
const ProtectedRoute=({children}:Props)=>{
    if(loginStore.getToken()===''){
        return <Navigate to='/login' replace/>
    }
    return children

}
export default ProtectedRoute