// ProtectedRoute.js
import React, { useContext } from "react";
import { AuthContext } from "../auth-guard/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
