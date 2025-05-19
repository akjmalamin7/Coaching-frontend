import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
const LazyLSignIn = lazy(() => import("./login"));
export const authRoutes: RouteObject[] = [
  {
    path: "/signin",
    element: (
      <Suspense fallback="Loading...">
        <LazyLSignIn />
      </Suspense>
    ),
  },
];
