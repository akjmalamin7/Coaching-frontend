import { AppRoute } from "@/shared/routerType/router.type";
import Unauthorized from "./Unathorized";

export const unauthorized_route: AppRoute[] = [
  {
    path: "/unauthorized",
    element: <Unauthorized />,
    withLayout: true,
    isPrivate: true,
  },
];
