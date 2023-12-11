import { Link } from "react-router-dom";
import checkMark from "../assets/png/checkMark.png";
import Demo from "../assets/png/Demo.png";

export default function () {
  return (
    <>
      <div className="mx-auto flex flex-col w-full bg-gradient-left  border-t border-[#00000036]  ">
        <div className="flex-col gap-2 flex grow w-full my-20 lg:my-12 mx-auto items-center text-center ">
          <h2 className="text-6xl text-blue-900 font-bold mb-1 ;">Make your <br/> life organized !</h2>
          <p className="text-lg text-slate-600">
            Attain focus, organization, and tranquility using AdhdList,<br/>recognized as the premier task manager and to-do list application.
          </p>
          <Link to={"/auth/signup"}>
            <button className="bg-blue-900 hover:bg-blue-950 text-lg text-white hover:blue-950 transition-all ease-in-out  duration-150 hover:px-3 p-1 px-2 rounded" size="small" variant="contained">
              Start for free
            </button>
          </Link>
        </div>
        
        <div className="justify-center flex my-auto w-full border-t bg-[#0c0c0c31] border-[#0000003a] py-16">
          <div className="m-auto py-5 ">
            <ol>
                <li className=" :text-black"> ✦ Track your Time </li>
                <li> ✦ Stop getting distracted </li>
                <li> ✦ Add steps and finish yor work more smoothly </li>
                <li> ✦ Become focused, organized, and calm </li>
                <li> ✦ Completely free and open source </li>
            </ol>
          </div>
          <div className="w-96 mb-1 m-auto ">
            <img src={Demo}  alt="Demo" />
            </div>
        </div>
      </div>
    </>
  );
}


