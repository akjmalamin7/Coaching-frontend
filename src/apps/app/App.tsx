import rootRoutes from "@/apps/routes/root.routes.tsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
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
