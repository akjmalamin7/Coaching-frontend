import Layout from "@/components/layout";
import { authRoutes } from "@/modules/auth/routes";
import { homeRoutes } from "@/modules/home/routes";
import { profileRoute } from "@/modules/profile/routes";
import { AppRoute } from "@/shared/routerType/router.type";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../privateRoute";

const router: AppRoute[] = [...authRoutes, ...homeRoutes, ...profileRoute].map((route) => {
  let element = <Suspense fallback="Loading...">{route.element}</Suspense>;
  if (route.withLayout && route.isPrivate) {
    element = (
      <PrivateRoute>
        <Layout>{element}</Layout>
      </PrivateRoute>
    );
  }
  return {
    ...route,
    element,
  };
});
export default function routes() {
  return createBrowserRouter([...router]);
}
