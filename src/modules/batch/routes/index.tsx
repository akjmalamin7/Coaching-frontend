import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazyBatch = lazy(() => import("./create"));
const LazyBatchList = lazy(() => import("./list"));
export const batchRoutes: AppRoute[] = [
  {
    path: "/subject/create",
    element: <LazyBatch />,
    withLayout: true,
    isPrivate: true,
    role: ["admin"],
  },
  {
    path: "/subject/list",
    element: <LazyBatchList />,
    withLayout: true,
    isPrivate: true,
    role: ["admin"],
  },
];
