import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyLSignIn = lazy(() => import("./login"));
export const authRoutes: AppRoute[] = [
  {
    path: "/login",
    element: <LazyLSignIn />,
    withLayout: false,
    isPrivate: false,
  },
];
