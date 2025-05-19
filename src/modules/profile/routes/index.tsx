import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyProfile = lazy(() => import("./home"));
export const profileRoute: AppRoute[] = [
  {
    path: "/profile",
    element: <LazyProfile />,
    withLayout: true,
    isPrivate: true,
  },
];
