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

  return (
    <>
      <div
        id="logo-sidebar"
        className={` fixed top-0 left-0 z-[70]   w-64 `}
        aria-label="Sidebar"
      >
        <aside
          id="nav-menu-5"
          aria-label="Side navigation"
          className={`  lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0 " : " -translate-x-full"
          }  h-full fixed  bottom-0 left-0 bg-neutral-300 dark:bg-[#232730] flex w-72 flex-col    transition-transform }`}
        >
          <div
            to="/"
            className="flex  items-center gap-4  h-[60px] border-b-[1px]  border-[#ffffff3d] bg-neutral-300 dark:bg-[#23272f]"
          >
            <div className="h-60"></div>
            <Link to={"/"}>
              <img
                className="w-11  ml-3 border-neutral-700  dark:border-[#ffffff0e] border-r-2 border-solid pr-3"
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="font-mont text-black dark:text-[#c4c0c0]">
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
  const sidePanelItem = useDrawer((item) => item.sidePanelItem);
  const sidePanelTab = useDrawer((item) => item.sidePanelTab);
  const SetSidePanelTab = useDrawer((item) => item.SetSidePanelTab);
  return (
    <>
      <div className="flex justify-around align border-[#2d5d8533] border dark:bg-[#00000042] bg-neutral-400 ">
        <button
          className={`drawer-button ${
            !sidePanelTab && "dark:bg-slate-700 bg-neutral-500"
          }`}
          onClick={() => SetSidePanelTab(false)}
        >
          <DensitySmallIcon />
        </button>
        <button
          disabled={!sidePanelItem}
          className={`${
            !sidePanelItem?.steps && "text-gray-600 "
          } drawer-button ${
            sidePanelTab && "dark:bg-slate-700 bg-neutral-500"
          }`}
          onClick={() => {
            if (!sidePanelItem?.steps) return;
            SetSidePanelTab(true);
          }}
        >
          <MicrowaveIcon />
        </button>
      </div>
      <div className="transition-all ease-in-out bg-neutral-300 dark:bg-[#232730]">
        {!sidePanelTab ? <CustomCategories /> : <SidePanel />}
      </div>
    </>
  );
}
