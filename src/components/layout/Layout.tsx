import { RootState } from "@/shared/redux/store/store";
import { useSelector } from "react-redux";
import Header from "../header";
import Sidebar from "../sidebar";
interface Props {
  children?: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isToggle);
  return (
    <div>
      <header className="h-[55px] lg:h-[63px] w-[100%] bg-white  dark:bg-gray-800  fixed left-0 top-0 z-30 flex items-center border-b border-b-gray-300 dark:border-b-gray-700">
        <Header />
      </header>
      <aside
        className={`h-[100dvh] lg:h-screen w-[255px] fixed z-30 lg:z-20 top-0 ${
          isSidebarOpen === true ? "left-[0px]" : "left-[-255px]"
        } lg:left-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-r border-r-gray-300 dark:border-r-gray-700 `}
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <main className="h-[calc(100vh-55px)] lg:h-[calc(100vh-63px)] w-full lg:w-[calc(100%-255px)] mt-[55px] lg:mt-[63px] lg:ml-[255px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
// transition-all duration-200 ease-in-out
