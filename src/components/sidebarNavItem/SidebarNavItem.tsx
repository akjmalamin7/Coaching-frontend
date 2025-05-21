import Text from "@/shared/ui/text";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path?: string;
  title?: string;
  icon?: React.ReactNode;
}
const SidebarNavItem = ({ icon, path, title }: Props) => {
  return (
    <li>
      <NavLink
        to={path || ""}
        className="group menu_link h-[36px] flex gap-[10px] px-[10px] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-[8px] transition-all duration-200 ease-in-out"
      >
        <div className="flex items-center gap-[10px]">
          {icon && <div className=" transition-all duration-200 ease-in-out">{icon}</div>}
          <div>
            <Text size="md" element="p" fontWeight="regular" color="theme">
              {title}
            </Text>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
