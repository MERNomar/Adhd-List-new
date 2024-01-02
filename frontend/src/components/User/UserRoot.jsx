import { Outlet } from "react-router-dom";
import { useUser } from "../../store/authState";
import { useDarkMode } from "../../store/todoState";
import UserSideBar from "./UserSideBar";
import "../../index.css";
export default function UserRoot() {
  const { username } = useUser((user) => user.user);
  const darkMode = useDarkMode((item) => item.darkMode);
  return (
    <>
      <div className={`${darkMode && "dark"} dark min-h-screen bg-black`}>
        <UserSideBar />
        <div className="ml-[300px] text-white ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
