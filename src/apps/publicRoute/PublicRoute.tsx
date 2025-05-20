import useAuth from "@/shared/hooks/useAuth";
import useAuthCheck from "@/shared/hooks/useAuthChecked";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const location = useLocation();
  const isLoggedIn = useAuth();
  const authChecked = useAuthCheck();

  if (!authChecked) return null;

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
