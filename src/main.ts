import Settings from "~icons/material-symbols/settings";
import Home from "~icons/material-symbols/home";
import About from "~icons/mdi/about";
import type { RouteType } from "./app";

export const routes: RouteType[] = [
  { id: "/", name: "Home", icon: Home },
  { id: "/example", name: "Example", icon: About },
  {
    id: "/settings",
    name: "Settings",
    icon: Settings,
    children: [
      { id: "/settings/user", name: "User Settings" },
      { id: "/settings/permission", name: "Permission Settings" },
    ],
  },
];
