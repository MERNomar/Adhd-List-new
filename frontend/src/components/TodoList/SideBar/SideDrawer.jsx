import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/png/checkmark.png";
import { useDrawer } from "../../../store/todoState";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import SidePanel from "./TodoUpdate/TodoUpdatePanel";
import CustomCategories from "./CustomCategories";

export default function SideNavigationUserContacts() {
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);

  return (
    <>
      <div
        id="logo-sidebar"
        className={` fixed top-0 left-0 z-[70]  w-64 `}
        aria-label="Sidebar"
      >
        <aside
          id="nav-menu-5"
          aria-label="Side navigation"
          className={`  lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0 " : " -translate-x-full"
          }  h-full fixed  bottom-0 left-0  flex w-72 flex-col   bg-[#232730] transition-transform }`}
        >
          <div
            to="/"
            className="flex  items-center gap-4  h-[60px] border-b-[1px]  border-[#ffffff3d] bg-[#23272f]"
          >
            <Link to={"/"}>
              <img
                className="w-11  ml-3  border-[#ffffff0e] border-r-2 border-solid pr-3"
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="font-mont text-[#c4c0c0]">
              <h3>AdhdList</h3>
              <p className="text-xs ">Get your shit done!</p>
            </div>
          </div>
          <ControlPanelItem />
        </aside>
        {/*  <!-- End Side navigation menu with user profile and user contacts --> */}
      </div>
    </>
  );
}

function ControlPanelItem() {
  const [Controller, setController] = useState(true);
  return (
    <>
      <div className="flex justify-around align border-[#2d5d8533] border bg-[#00000042]">
        <button
          className={`drawer-button ${Controller && "bg-slate-700"}`}
          onClick={() => setController(true)}
        >
          <DensitySmallIcon />
        </button>
        <button
          className={`drawer-button ${!Controller && "bg-slate-700"}`}
          onClick={() => setController(false)}
        >
          <MicrowaveIcon />
        </button>
      </div>
      <div>{Controller ? <CustomCategories /> : <SidePanel />}</div>
    </>
  );
}
