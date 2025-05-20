import useAuth from "@/shared/hooks/useAuth";
import useAuthCheck from "@/shared/hooks/useAuthChecked";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const isLoggedIn = useAuth(); // redux auth state check
  const authChecked = useAuthCheck(); // cookie থেকে redux-এ auth বসায়

  if (!authChecked) return null; // চেক শেষ না হওয়া পর্যন্ত কিছু রেন্ডার করবে না

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
