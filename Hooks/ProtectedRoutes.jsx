import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const id = localStorage.getItem("id");

    if (id) {
      setIsAuthenticated(true);
    }
    // console.log(location);
  }, [location]);

  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
