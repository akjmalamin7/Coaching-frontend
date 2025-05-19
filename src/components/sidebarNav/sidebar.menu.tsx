import HomeIcon from "@/assets/icons/homeIcon";
import React from "react";

export interface SidebarMenuProps {
  _id: string;
  title?: string;
  icon?: React.ReactNode;
  path: string;
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    _id: "2",
    title: "Profile",
    icon: <HomeIcon />,
    path: "/profile",
  },
];
