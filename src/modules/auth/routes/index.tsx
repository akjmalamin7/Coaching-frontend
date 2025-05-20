import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyLSignIn = lazy(() => import("./login"));
const LazyRegistration = lazy(() => import("./registration"));
export const authRoutes: AppRoute[] = [
  {
    path: "/login",
    element: <LazyLSignIn />,
    withLayout: false,
    isPrivate: false,
  },
  {
    path: "/registration",
    element: <LazyRegistration />,
    withLayout: false,
    isPrivate: false,
  },
];
