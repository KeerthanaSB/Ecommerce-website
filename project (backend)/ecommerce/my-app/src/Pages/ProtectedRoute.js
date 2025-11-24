import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {useAuth} from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  console.log(auth);
  if (!auth) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/Login" />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
