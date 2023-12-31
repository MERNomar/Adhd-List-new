import React, { useEffect } from "react";
import { useDarkMode, useDrawer } from "../../../store/todoState";
import useWindowDimensions from "../../../hooks/getWindowDimensions";
import { Dehaze, GitHub, Brightness4 } from "@mui/icons-material";
import { useUser } from "../../../store/authState";
import { Person } from "@mui/icons-material";
import { useStore } from "../../../store/todoState";
import { Link } from "react-router-dom";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export default function NavBar() {
  return (
    <nav className=" w-full justify-between  lg:w-[calc(100%-18rem)] flex items-center h-[60px] border-b-[1px] fixed top-0 z-50   NavBar m-0 right-0 border-[#ffffff3d] dark:bg-[#23272f] bg-neutral-300 stroke-neutral-950   ">
      <NavBarInteractiveMenu />
      <div className="flex">
        {/** This component is in a deferent folder */}
        <UserSettingsNavButton />
        <DarkModeNavButton />
        <GithubNavButton />
        <Logout />
      </div>
    </nav>
  );
}

function GithubNavButton() {
  const GITHUB_LINK = `https://github.com/MERNomar/Adhd-List-new`;
  return (
    <button>
      <a target="_blank" href={GITHUB_LINK} className=" nav-item">
        <GitHub className="icon-button" />
      </a>
    </button>
  );
}

function DarkModeNavButton() {
  const setDarkMode = useDarkMode((dark) => dark.setDarkMode);

  return (
    <button
      onClick={() => {
        setDarkMode();
      }}
      className=" nav-item"
    >
      <Brightness4 className="icon-button" />
    </button>
  );
}

function UserSettingsNavButton() {
  return (
    <Link className=" nav-item" to={"/app/user/information"}>
      <Person className="icon-button" />
    </Link>
  );
}

function Logout() {
  const setLogout = useUser((user) => user.setLogout);

  const handleClick = () => {
    if (confirm("You will be logged out")) {
      setLogout(null);
    }
  };
  return (
    <button onClick={() => handleClick()} className=" nav-item mr-7">
      <MeetingRoomIcon className="icon-button" />
    </button>
  );
}

function NavBarInteractiveMenu() {
  const isSizeOk = useDrawer((nav) => nav.isSizeOk);
  const setIsSizeOk = useDrawer((nav) => nav.setIsSizeOk);
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 1024) setIsSizeOk(true);
    else setIsSizeOk(false);
  }, [width]);
  return (
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
  );
}
