import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import type { JSX } from "react/jsx-runtime";

type Props = {
  children: JSX.Element;
};
const ProtectedRoute = ({ children }: Props) => {
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
