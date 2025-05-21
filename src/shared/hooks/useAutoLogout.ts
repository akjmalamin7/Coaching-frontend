import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../redux/features/auth/authSlice";

const useAutoLogout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authCookie = Cookies.get("auth");
    if (!authCookie) return;

    try {
      const auth = JSON.parse(authCookie);
      const token = auth?.token;
      if (!token) return;

      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp;

      const expiryTime = exp * 1000;

      const currentTime = Date.now();
      const timeoutDuration = expiryTime - currentTime;

      if (timeoutDuration <= 0) {
        dispatch(userLoggedOut());
        Cookies.remove("auth");
        if (localStorage.getItem("theme")) {
          localStorage.removeItem("theme");
        }
        return;
      }

      const timeout = setTimeout(() => {
        dispatch(userLoggedOut());
        Cookies.remove("auth");
      }, timeoutDuration);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.error("Failed to decode token for auto logout", error);
    }
  }, [dispatch]);
};

export default useAutoLogout;
