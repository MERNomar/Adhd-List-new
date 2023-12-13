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
        <ul className="flex flex-col flex-1 gap-1 py-3 ">
          <li className="px-3">
            <NavLink
              to="/todos/all"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex items-center self-center w-6">
                <AllTasksSVG />
              </div>
              <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                All Tasks
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/todos/my-day"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex items-center self-center w-6">
                <MyDaySVG />
              </div>
              <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
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
              <div className="flex items-center self-center w-6">
                <WorkSVG />
              </div>
              <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                Work
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/todos/home"
              className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
            >
              <div className="flex items-center self-center w-6">
                <HomeSVG />
              </div>
              <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
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
              <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                Important
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
