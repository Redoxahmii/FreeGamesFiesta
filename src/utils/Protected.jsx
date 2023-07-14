/* eslint-disable react/prop-types */
import { UserAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/home"></Navigate>;
  }
  return children;
};

export default Protected;
