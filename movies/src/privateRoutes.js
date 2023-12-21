import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from './contexts/authContext'

const PrivateRoutes = () => {

  const authContext = useContext(AuthContext);
  const location = useLocation();

  return authContext.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    <Navigate to='/users/login' replace state={{ from: location }}/>
  );
};

export default PrivateRoutes;