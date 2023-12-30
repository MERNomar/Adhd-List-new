import { useState } from "react";
import { useUser } from "../../../store/authState";
import { Person } from "@mui/icons-material";
import { useStore } from "../../../store/todoState";

export default function UserSettingsNavButton() {
  const setLogout = useUser((user) => user.setLogout);
  const setHideUserNavbarMenu = useStore((user) => user.setHideUserNavbarMenu);
  const hideUserNavbarMenu = useStore((user) => user.hideUserNavbarMenu);

  const handleClick = (e) => {
    e.stopPropagation();
    setHideUserNavbarMenu(!hideUserNavbarMenu);
    // setLogout(null);
  };
  return (
    <>
      <div
        onClick={(e) => handleClick(e)}
        className={`${
          !hideUserNavbarMenu && "bg-neutral-400 dark:bg-slate-600"
        }  nav-item cursor-pointer text-center `}
      >
        <Person className="icon-button " />
        <div
          className={`${
            hideUserNavbarMenu && "hidden"
          }  absolute p-1 mt-[41px] w-auto flex flex-col text-xs bg-neutral-500 dark:bg-slate-700 cursor-default pb-3 rounded`}
        >
          <div onClick={() => console.log("user")} className="user-menu-item">
            User
          </div>
          <div
            onClick={() => console.log("stastics")}
            className="user-menu-item"
          >
            Statistics
          </div>
          <div onClick={() => console.log("logout")} className="user-menu-item">
            Log out
          </div>
        </div>
      </div>
    </>
  );
}
