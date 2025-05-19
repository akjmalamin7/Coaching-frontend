import Layout from "@/components/layout";
import { authRoutes } from "@/modules/auth/routes";
import { createBrowserRouter } from "react-router-dom";
export default function routes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [...authRoutes],
    },
  ]);
}
