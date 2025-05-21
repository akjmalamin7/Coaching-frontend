import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedOut } from "../redux/features/auth/authSlice";

export default function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("auth");
    dispatch(userLoggedOut());
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
    }
    navigate("/login");
  };
  return { handleLogout };
}
