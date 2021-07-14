import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  {
    exact: true,
    path: "/",
    children: <Home />
  },
  {
    exact: false,
    path: "/userManagement",
    children: <UserManagement />
  },
  {
    exact: false,
    path: "/setting",
    children: <Setting />
  },
  {
    exact: false,
    path: "*",
    children: <Page404 />
  }
];
