import React, { useState } from "react";
import { Link, NavLink  } from "react-router-dom";
import logo from "../assets/png/checkmark.png";
import { useDrawer } from "../../store/todoState";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import { IconButton , Button } from "@mui/material";
import SidePanel from "./TodoUpdate/TodoUpdatePanel";
import CustomCategories from "./CustomCategories";



export default function SideNavigationUserContacts() {
  const isSideNavOpen = useDrawer((nav) => nav.isSideNavOpen);
  const setIsSideNavOpen = useDrawer((nav) => nav.setIsSideNavOpen);

  return (
    <>
      {/*  <!-- Component: Side navigation menu with user profile and user contacts --> */}
      <div
        id="logo-sidebar"
        className={` fixed top-0 left-0 z-[70]  w-64 `}
        aria-label="Sidebar"
      >
        {/*  <!-- Mobile trigger --> */}
        {/* <button
          title="Side navigation"
          type="button"
          className={`visible fixed left-6 top-6 z-50 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
            isSideNavOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
              : ""
          }`}
          aria-haspopup="menu"
          aria-label="Side navigation"
          aria-expanded={isSideNavOpen ? " true" : "false"}
          aria-controls="nav-menu-5"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button> */}
        {/** this code will be implemented later to make the app more reactive */}

        {/*  <!-- Side Navigation --> */}
        <aside
          id="nav-menu-5"
          aria-label="Side navigation"
          className={`  lg:translate-x-0 ${     isSideNavOpen ? "translate-x-0 " : " -translate-x-full"  }  h-full fixed  bottom-0 left-0  flex w-72 flex-col   bg-[#232730] transition-transform }`}
        >
          {/* The Logo Will implement later  */}
          <div
            to="/"
            className="flex  items-center gap-4  h-[60px] border-b-[1px]  border-[#ffffff3d] bg-[#23272f]"
          >
            <Link to={"/"}><img className="w-11  ml-3  border-[#ffffff0e] border-r-2 border-solid pr-3" src={logo} alt="logo" /></Link>
            <div className="font-mont text-[#c4c0c0]">
              <h3>AdhdList</h3>
              <p className="text-xs ">Get your shit done!</p>
            </div>
          </div>
        
          <ControlPanelItem/>


          {/* <footer className=" border-t-2 border-t-[#ffffff57] ">
          <a
            href="#"
            className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors hover:bg-[#171a20] hover:text-[#0084ff] "
          >
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
              Logout
            </div>
          </a>
        </footer>*/}
        </aside>  
        {/*  <!-- End Side navigation menu with user profile and user contacts --> */}
      </div>
    </>
  );
}


function ControlPanelItem() {
  const [Controller , setController] = useState(true)
  return (
    <>
    <div className="flex justify-around border-[#2d5d8533] border bg-[#00000042]">
      <div className={`${Controller && "bg-[#3131313a]"} rounded `}><Button size="large" onClick={() => setController(true)}><DensitySmallIcon/></Button></div>
      <div className={`${!Controller && "bg-[#3131313a]"} rounded "}`} ><Button color='primary' size="large" onClick={() => setController(false)}><MicrowaveIcon/></Button></div>
    </div>
    <div>
    {Controller ? <CustomCategories/> : <SidePanel />}
    </div>
    </>
  )
}

