import { Outlet } from "react-router-dom";
import SideDrawer from "./SideBar/SideDrawer";
import {
  useDarkMode,
  useDrawer,
  useStore,
  useUserPanel,
} from "../../store/todoState";
import NavBar from "./NavBar/NavBar";
import UserPanel from "./UserPanel/UserPanel";
import "../../index.css";

export default function App() {
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);
  const isSizeOk = useDrawer((nav) => nav.isSizeOk);
  const darkMode = useDarkMode((store) => store.darkMode);
  const isUserPanelOpen = useUserPanel((store) => store.isUserPanelOpen);

  return (
    <>
      {isUserPanelOpen && <UserPanel />}
      <div className={`${darkMode ? "dark" : "null"} slide`}>
        {isSideNavOpen && isSizeOk ? (
          <div
            onClick={() => {
              setIsSideNavOpen(!isSideNavOpen);
            }}
            className="w-full h-full z-[70] fixed top-0 bottom-0 left-0 right-0 bg-black/70 transition-100 transition-colors"
          ></div>
        ) : (
          ""
        )}

        <div className=" lg:ml-[286px] text-2xl mt-[70px] text-black test  dark:text-white   dark:bg-[#1a1d23] bg-white ">
          <NavBar />
          <SideDrawer />
          <Outlet />
        </div>
      </div>
    </>
  );
}
