import { Outlet } from "react-router-dom";
import SideDrawer from "./SideBar/SideDrawer";
import { getTodos, getRootCategories } from "../../myAPIS";
import { useDarkMode, useDrawer, useStore } from "../../store/todoState";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import { useUser } from "../../store/authState";

export default function App() {
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);
  const isSizeOk = useDrawer((nav) => nav.isSizeOk);
  const darkMode = useDarkMode((store) => store.darkMode);

  return (
    <div className={`${darkMode ? "dark" : "null"}`}>
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
      <div className=" lg:ml-[286px] text-2xl mt-[70px] ">
        <NavBar />
        <SideDrawer />
        <Outlet />
      </div>
    </div>
  );
}
