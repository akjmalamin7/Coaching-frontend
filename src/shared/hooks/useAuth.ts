import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
export default function useAuth() {
  const auth = useSelector((state: RootState) => state.auth);
  if (auth?.token && auth?.user) {
    return true;
  }
  return false;
}
