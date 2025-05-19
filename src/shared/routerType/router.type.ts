import { RouteObject } from "react-router-dom";

export type AppRoute = RouteObject & {
  withLayout?: boolean;
  isPrivate?: boolean;
};
