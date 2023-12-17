import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from "./contexts/authContext";

const PrivateRoutes = () => {
  //let auth = { 'token': false }
  const context = useContext(AuthContext)
  let authUser = context.isAuthenticated;
return (
    authUser ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;