import Button from "@/shared/ui/button";
import Text from "@/shared/ui/text";
import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import Modelcon from "@/assets/icons/modeIcon/Modelcon";
import useClickOutSide from "@/shared/hooks/useClickOutSide";
import { useTheme } from "@/shared/hooks/useTheme";
import { sidebarToggle } from "@/shared/redux/features/sidebar/slideSidebar";
import { AppDispatch } from "@/shared/redux/store/store";
import Avatar from "@/shared/ui/avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppDrawer from "../appDrawer/AppDrawer";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null!);

  // ?@_______ get user@
  // const user = useSelector((state:RootState) => state?.auth?.user);
  const [visible, setVisible] = useState(false);
  useClickOutSide(dropdownRef, setVisible);

  // ?@_______ sidebar visible _____@
  const dispatch = useDispatch<AppDispatch>();
  const handleVisibleSidebar = () => {
    dispatch(sidebarToggle({ isToggle: true }));
  };

  // ?@_______ toggle app drawer _____@
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  /* code for dark mode */
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between w-full px-[20px]">
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center lg:hidden">
          <Button variant="text" className="flex items-center" onClick={handleVisibleSidebar}>
            <HamburgerIcon />
          </Button>
        </div>
        <div className="xl:w-[235px] flex xl:justify-start">
          <Text color="white" fontWeight="medium" size="lg">
            <Link
              to={"/"}
              className="bg-gray-100 dark:bg-gray-700 text-gray-950 dark:text-gray-100 py-[8px] px-[10px] rounded-[5px] uppercase"
            >
              Coaching
            </Link>
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <Button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          variant="text"
          color="theme"
          size="size-3"
          className="hover:bg-gray-100 dark:hover:bg-gray-700 !px-[10px] !w-[40px] !h-[40px]"
        >
          <Modelcon mode={theme === "dark" ? "light" : "dark"} />
        </Button>
        <div className="relative">
          <Avatar
            //  url={user?.photo || ""}
            //   name={user?.firstName}
            onClick={handleVisible}
          />
          <div
            className={` ${visible ? "block" : "hidden"} absolute right-0 top-[50px] lg:top-[53px]`}
            ref={dropdownRef}
          >
            <AppDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
