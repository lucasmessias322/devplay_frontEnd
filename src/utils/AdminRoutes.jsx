import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const AdminRoutes = () => {
  const { token, currentUserData } = useContext(AuthContext);
  return token && currentUserData.role.includes("admin") ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoutes;
