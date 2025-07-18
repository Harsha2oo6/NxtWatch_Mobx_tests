import { Route, Routes } from "react-router-dom";
import { LoginPath, PathArray } from "../Constants/Paths";
import LoginPage from "../Components/LoginPage";

import ProtectedRoute from "../Hocs/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LoginPath} element={<LoginPage/>}/>
      {PathArray.map((each) => {
        return (
          <Route
            path={each.path}
            element={<ProtectedRoute>{each.component}</ProtectedRoute>}
          />
        );
      })}
    </Routes>
  );
};
export default AppRoutes;
