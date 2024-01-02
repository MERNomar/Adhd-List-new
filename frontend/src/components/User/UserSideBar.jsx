import { NavLink } from "react-router-dom";
import { useDarkMode } from "../../store/todoState";
import Logo from "../assets/png/checkmark.png";
import { useUser } from "../../store/authState";

export default function UserSideBar() {
  const { username } = useUser((user) => user.user);
  const darkMode = useDarkMode((item) => item.darkMode);
  return (
    <>
      <aside
        className={`  lg:translate-x-0   h-full fixed  bottom-0 left-0 bg-neutral-300 dark:bg-[#232730] flex w-72 flex-col    transition-transform  text-white`}
      >
        <div className="flex items-center p-1 mt-5 ml-5 rounded bg-slate-700">
          <img src={Logo} className="mr-2 w-11" alt="checkmark" />
          <div className="text-lg font-bold text-gray-300">AdhdList</div>
        </div>
        <div className="mt-2 font-medium text-center">Hello {username}!</div>
        <NavLink to={"settings"} className="text-white nav-li">
          settings
        </NavLink>
        <NavLink to={"statistics"} className="text-white nav-li">
          Statistics
        </NavLink>
      </aside>
    </>
  );
}
