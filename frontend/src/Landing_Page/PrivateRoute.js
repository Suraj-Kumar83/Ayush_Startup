// src/Landing_Page/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // or <Spinner />

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
