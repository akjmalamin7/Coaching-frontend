import { RootState } from "@/shared/redux/store/store";
import { useSelector } from "react-redux";
import SidebarNavItem from "../sidebarNavItem";
import { SIDEBAR_MENU_DATA, SidebarMenuProps } from "./sidebar.menu";
const SidebarNav = () => {
  const user_role = useSelector((state: RootState) => state.auth.user?.role);
  const has_access = (roles?: string[]) => roles?.includes("all") || (user_role && roles?.includes(user_role));
  const render_menu = (menuList: SidebarMenuProps[]) =>
    menuList
      .filter((menu) => has_access(menu.role))
      .map((menu) => (
        <div key={menu._id}>
          <SidebarNavItem title={menu.title} path={menu.path || ""} icon={menu.icon} />
          {menu.children && (
            <ul className="pl-4">
              {" "}
              {/* Indent submenu */}
              {render_menu(menu.children)}
            </ul>
          )}
        </div>
      ));

  return (
    <div className="px-[10px] pt-[15px] ">
      <ul className="flex flex-col gap-y-[6px]">{render_menu(SIDEBAR_MENU_DATA)}</ul>
    </div>
  );
};

export default SidebarNav;
