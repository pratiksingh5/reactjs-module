import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       return navigate("/");
//     }
//   }, [navigate, isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <div>{children}</div>;
};

export default Protected;
