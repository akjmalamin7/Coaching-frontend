import HomeIcon from "@/assets/icons/homeIcon";
import React from "react";

export interface SidebarMenuProps {
  _id: string;
  title?: string;
  icon?: React.ReactNode;
  path: string;
  role?: string[];
  children?: SidebarMenuProps[];
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/",
    role: ["all"],
  },

  {
    _id: "2",
    title: "Subject",
    icon: <HomeIcon />,
    path: "",
    role: ["admin"],
    children: [
      {
        _id: "2.1",
        title: "Create Subject",
        icon: <HomeIcon />,
        path: "/subject/create",
        role: ["admin"],
      },
      {
        _id: "2.2",
        title: "Subject List",
        icon: <HomeIcon />,
        path: "/subject/list",
        role: ["admin"],
      },
    ],
  },
  {
    _id: "3",
    title: "Batch",
    icon: <HomeIcon />,
    path: "/batch",
    role: ["admin"],
  },
  {
    _id: "4",
    title: "branch",
    icon: <HomeIcon />,
    path: "/branch",
    role: ["super_admin"],
  },
  {
    _id: "5",
    title: "routine",
    icon: <HomeIcon />,
    path: "/branch",
    role: ["super_admin", "admin", "student"],
  },
  {
    _id: "6",
    title: "result",
    icon: <HomeIcon />,
    path: "/branch",
    role: ["student"],
  },
];
