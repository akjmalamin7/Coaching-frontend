import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyLSignIn = lazy(() => import("./login"));
const LazyRegistration = lazy(() => import("./registration"));
const LazyForgot = lazy(() => import("./forgot"));
export const authRoutes: AppRoute[] = [
  {
    path: "/login",
    element: <LazyLSignIn />,
    withLayout: false,
    isPrivate: false,
    role: [],
  },
  {
    path: "/registration",
    element: <LazyRegistration />,
    withLayout: false,
    isPrivate: false,
    role: [],
  },
  {
    path: "/forgot",
    element: <LazyForgot />,
    withLayout: false,
    isPrivate: false,
    role: [],
  },
];
