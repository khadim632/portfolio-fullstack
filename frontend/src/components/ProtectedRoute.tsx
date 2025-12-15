import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  // Si l'utilisateur n'est pas connecté, rediriger vers /login
  if (!authContext?.user) {
    return <Navigate to="/login" replace />;
  }

  // Si connecté, afficher la page demandée
  return <>{children}</>;
};

export default ProtectedRoute;