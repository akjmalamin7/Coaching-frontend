import rootRoutes from "@/apps/routes/root.routes.tsx";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RouterProvider router={rootRoutes()} />
    </div>
  );
};

export default App;
