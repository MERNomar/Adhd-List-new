import { Link, NavLink, Outlet } from "react-router-dom";
import upworkIcon from "../../components/assets/png/upwork.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import checkMark from "../assets/png/checkMark.png";
import LandingPage from "./LandingPage";

export default function LandingRoot() {
 
  return (
    <>
    <div className="bg-white text-black selection:bg-slate-400 add-zoom">
      <div className="justify-between flex  items-center w-full m-0 p-1 text-black h-[55px]">
        {<NavBarItems />}
      </div>
      <LandingPage/>
      </div>
    </>
  );
}

function NavBarItems() {
  return (
    <>
      <Link className=" flex items-center ml-5 xl:ml-32 transition-all" to={"/"}>
        <img className="w-12 ml-3" src={checkMark} alt="Logo" />
        <div className="ml-2 border-l-2 text-lg border-l-[#464545] px-2">AdhdList</div>
      </Link>

      <div className=" flex items-center mx-4 mr-5 xl:mr-32 transition-all">
        <a
          className="hover:bg-[#1408082d] p-1 rounded-xl mr-5 transition-colors duration-200"
          href="https://www.upwork.com/freelancers/~01156fadf38622e666"
          target="_blank"
        >
          <img className="w-7" src={upworkIcon} alt="upwork" />
        </a>
        <a
          className="hover:bg-[#1408082d] p-1 rounded-xl mr-5 transition-colors duration-200  "
          href="https://github.com/MERNomar/TodoList-react"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <Link to={"/auth/login"} className=" border-l-[2px] pl-3 border-slate-400 ">
          <button className=" transition-colors duration-300 p-1 px-2 rounded   hover:bg-[#1408082d] " >
            Login
          </button>
          </Link>
      </div>
    </>
  );
}
