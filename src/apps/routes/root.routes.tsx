import Layout from "@/components/layout";
import { authRoutes } from "@/modules/auth/routes";
import { homeRoutes } from "@/modules/home/routes";
import { profileRoute } from "@/modules/profile/routes";
import { subjectRoutes } from "@/modules/subject/routes";
import { unauthorized_route } from "@/modules/unautorized";
import { AppRoute } from "@/shared/routerType/router.type";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../privateRoute";
import PublicRoute from "../publicRoute";

const router: AppRoute[] = [...authRoutes, ...homeRoutes, ...profileRoute, ...subjectRoutes, ...unauthorized_route].map(
  (route) => {
    let element = <Suspense fallback="Loading...">{route.element}</Suspense>;
    if (route.withLayout && route.isPrivate) {
      element = (
        <PrivateRoute allow_roles={route.role ?? []}>
          <Layout>{element}</Layout>
        </PrivateRoute>
      );
    } else {
      element = <PublicRoute>{element}</PublicRoute>;
    }
    return {
      ...route,
      element,
    };
  }
);
export default function routes() {
  return createBrowserRouter([...router]);
}
