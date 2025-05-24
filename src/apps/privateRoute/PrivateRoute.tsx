import useAuth from "@/shared/hooks/useAuth";
import useAuthCheck from "@/shared/hooks/useAuthChecked";
import { RootState } from "@/shared/redux/store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
  allow_roles?: string[];
}

const PrivateRoute = ({ children, allow_roles }: Props) => {
  const location = useLocation();
  const isLoggedIn = useAuth(); // redux auth state check
  const authChecked = useAuthCheck(); // cookie থেকে redux-এ auth বসায়
  const user_role = useSelector((state: RootState) => state.auth.user?.role);

  if (!authChecked) return null; // চেক শেষ না হওয়া পর্যন্ত কিছু রেন্ডার করবে না

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allow_roles && allow_roles.length > 0) {
    if (!user_role || !allow_roles.includes(user_role)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;
