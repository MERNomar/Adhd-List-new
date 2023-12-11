import AllTasksSVG from "@mui/icons-material/FactCheckOutlined";
import MyDaySVG from "@mui/icons-material/WbTwilightOutlined";
import WorkSVG from "@mui/icons-material/BusinessCenterOutlined";
import HomeSVG from "@mui/icons-material/HomeOutlined";
import ImportantSVG from "@mui/icons-material/StarPurple500Outlined";
import SadFaceSVG from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { NavLink } from "react-router-dom";

export default function CustomCategories() {
    return (
      <nav
      aria-label="side navigation"
      className="flex-1 divide-y divide-slate-100 overflow-auto border-r-[1px]  border-[#2d888011] bg-[#23272f] "
    >
      <div>
        <ul className="flex flex-1 flex-col gap-1 py-3 ">
          <li className="px-3">
            <NavLink
              to="/todos/all"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex w-6 items-center self-center">
                <AllTasksSVG />
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                All Tasks
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/todos/my-day"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex w-6 items-center self-center">
                <MyDaySVG />
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                My Day
              </div>
            </NavLink>
          </li>
          {/* ALLLL Tasks */}
          <li className="px-3">
            <NavLink
              to="/todos/work"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex w-6 items-center self-center">
                <WorkSVG />
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Work
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/todos/home"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex w-6 items-center self-center">
                <HomeSVG />
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Home
              </div>
            </NavLink>
          </li>
  
          <li className="px-3">
            <NavLink
              to="/todos/important"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <ImportantSVG />
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Important
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/todos/overdue"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex w-6 items-center self-center">
                <SadFaceSVG />
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Overdue
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
  
    </nav>  )
  }
  