import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const localAuth = Cookies.get("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      try {
        if (auth?.token && auth?.user) {
          dispatch(
            userLoggedIn({
              token: auth.token,
              user: auth.user,
            })
          );
        }
      } catch (err) {
        console.error("Error parsing auth data from localStorage:", err);
      }
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
}
