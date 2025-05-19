import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyHome = lazy(() => import("./home"));
export const homeRoutes: AppRoute[] = [
  {
    path: "/",
    element: <LazyHome />,
    withLayout: true,
    isPrivate: true,
  },
];
