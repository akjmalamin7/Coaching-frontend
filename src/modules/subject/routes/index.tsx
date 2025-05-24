import { AppRoute } from "@/shared/routerType/router.type";
import { lazy } from "react";
const LazySubject = lazy(() => import("./create"));
const LazySubjectList = lazy(() => import("./list"));
export const subjectRoutes: AppRoute[] = [
  {
    path: "/subject/create",
    element: <LazySubject />,
    withLayout: true,
    isPrivate: true,
    role: ["admin"],
  },
  {
    path: "/subject/list",
    element: <LazySubjectList />,
    withLayout: true,
    isPrivate: true,
    role: ["admin"],
  },
];
