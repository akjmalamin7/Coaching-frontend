export default function useAuth() {
  // const auth = useSelector((state: RootState) => state.auth);
  if (auth?.token && auth?.user) {
    return true;
  }
  return false;
}
