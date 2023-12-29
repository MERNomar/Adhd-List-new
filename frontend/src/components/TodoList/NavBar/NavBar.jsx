import React, { useEffect } from "react";
import { useDarkMode, useDrawer } from "../../../store/todoState";
import { useUser } from "../../../store/authState";
import useWindowDimensions from "../../../hooks/getWindowDimensions";
import { Dehaze, Person, GitHub, Brightness4 } from "@mui/icons-material";

export default function NavBar() {
  const GITHUB_LINK = "https://github.com/MERNomar/TodoList-react";
  const isSizeOk = useDrawer((nav) => nav.isSizeOk);
  const setIsSizeOk = useDrawer((nav) => nav.setIsSizeOk);
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);
  const setLogout = useUser((user) => user.setLogout);
  const setDarkMode = useDarkMode((dark) => dark.setDarkMode);
  const darkMode = useDarkMode((dark) => dark.darkMode);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 1024) setIsSizeOk(true);
    else setIsSizeOk(false);
  }, [width]);

  return (
    <nav className=" w-full justify-between  lg:w-[calc(100%-18rem)] flex items-center h-[60px] border-b-[1px] fixed top-0 z-50   NavBar m-0 right-0 border-[#ffffff3d] dark:bg-[#23272f] bg-neutral-300 stroke-neutral-950   ">
      <div>
        {isSizeOk ? (
          <button
            className="ml-5 nav-item"
            onClick={() => {
              setIsSideNavOpen(!isSideNavOpen);
            }}
          >
            <Dehaze className="icon-button" />
          </button>
        ) : null}
      </div>
      <div className="flex">
        <button onClick={() => setLogout(null)} className=" nav-item">
          <Person className="icon-button" />
        </button>
        <button
          onClick={() => {
            setDarkMode();
          }}
          className=" nav-item"
        >
          <Brightness4 className="icon-button" />
        </button>
        <a target="_blank" href={GITHUB_LINK} className="mr-7 nav-item">
          <GitHub className="icon-button" />
        </a>
      </div>
    </nav>
  );
}
