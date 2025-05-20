import rootRoutes from "@/apps/routes/root.routes.tsx";
import useAuthCheck from "@/shared/hooks/useAuthChecked";
import useAutoLogout from "@/shared/hooks/useAutoLogout";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  const authChecked = useAuthCheck();
  useAutoLogout();
  if (!authChecked) return <div>Checking authentication...</div>;

  return (
    <div>
      <ToastContainer
        theme="light"
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnHover={true}
        icon={false}
        toastStyle={{ background: "#1A1A1A" }}
        closeOnClick
        pauseOnFocusLoss={false}
      />
      <RouterProvider router={rootRoutes()} />
    </div>
  );
};

export default App;
