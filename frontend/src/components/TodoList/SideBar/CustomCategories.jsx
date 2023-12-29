import MyDaySVG from "@mui/icons-material/WbTwilightOutlined";
import WorkSVG from "@mui/icons-material/BusinessCenterOutlined";
import ImportantSVG from "@mui/icons-material/StarPurple500Outlined";
import { NavLink } from "react-router-dom";
import { useStore } from "../../../store/todoState";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { postRootCategories } from "../../../myAPIS";
import { useUser } from "../../../store/authState";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CustomCategories() {
  const navItemsOpj = [
    {
      icon: <MyDaySVG />,
      link: "my-day",
    },
    {
      icon: <WorkSVG />,
      link: "work",
    },
    {
      icon: <ImportantSVG />,
      link: "important",
    },
  ];

  return (
    <nav
      aria-label="side navigation"
      className="flex-1 divide-slate-100 overflow-auto border-r-[1px]   border-[#2d888011] dark:bg-[#23272f] "
    >
      <div>
        {/* This will map the top icons ( main categories ) */}
        <ul className="flex justify-center flex-1 gap-1 py-3 ">
          {navItemsOpj.map((navItem) => {
            return <NavItem key={navItem.link} navItem={navItem} />;
          })}
        </ul>
      </div>
      <dir className="w-[90%] h-[1px] m-auto bg-[#ffffff50]"></dir>
      {/* This will map the root categories like if you picked work this should pick the work root items */}
      <RootCategory />
    </nav>
  );
}

export function RootCategory() {
  const currentPage = useStore((store) => store.currentPage);
  const allSideRoots = useStore((store) => store.allSideRoots);
  const setAllSideRoots = useStore((store) => store.setAllSideRoots);
  const [errorState, setErrorState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [childTitle, setChildTitle] = useState("");

  const { token } = useUser((user) => user.user);
  const filterRoot = allSideRoots.filter((item) => {
    return item?.category === currentPage;
  });

  const { title: category } = useParams();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (childTitle.length <= 3) return setErrorState("This Title is too short");
    if (childTitle.length >= 23) return setErrorState("This Title is too long");
    const item = { title: childTitle, category: category, completed: false };
    setIsLoading(true);
    setAllSideRoots([...allSideRoots, { ...item, _id: "dummy " }]);
    setChildTitle("");
    const data = await postRootCategories(item, token);
    setAllSideRoots([...allSideRoots, data]);
    setIsLoading(false);
    setErrorState(null);
  };
  return (
    <>
      <form
        disabled={isLoading}
        onSubmit={(e) => onSubmit(e)}
        className={`justify-center  mt-1  `}
      >
        <div className="flex justify-center rounded-md py-[1px]   bg-[#00000069]">
          <input
            className={` ${
              errorState ? "border-red-700" : "focus:border-blue-500"
            }
              dark:bg-black bg-neutral-300 border-black disabled:cursor-not-allowed   p-[10px] rounded shadow-sm w-[220px]
             click:transition-colors duration-300 outline-[0] border-[#2941913f] border-[1px] text-base border-solid h-8 m-1`}
            type="text"
            name="title"
            placeholder="Add project"
            id="title"
            disabled={isLoading}
            value={childTitle}
            onChange={(e) => setChildTitle(e.target.value)}
          />
          <button
            className="flex justify-center p-2 m-0 transition-colors duration-100 ease-in-out rounded-full disabled:cursor-not-allowed disabled:hover:bg-transparent hover:bg-slate-800 w-9"
            type="submit"
            disabled={isLoading}
          >
            <AddIcon className="m-auto text-blue-500" />
          </button>
        </div>
        {errorState && (
          <div className="text-sm text-center text-red-500">{errorState}</div>
        )}
      </form>{" "}
      <ul className="flex flex-col  flex-1 gap-1 py-2 overflow-auto font-medium h-[50vh] lg:h-[68vh]">
        {filterRoot.map((item) => {
          return (
            <li className="px-3 text-base transition-colors " key={item._id}>
              <NavLink
                to={currentPage + "/" + item._id}
                className="flex items-center gap-3 rounded p-3 text-black dark:text-gray-100 transition-colors  hover:text-[#0084ff]   dark:aria-[current=page]:bg-[#283541]  aria-[current=page]:text-black "
              >
                <div> {item.title}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function NavItem({ navItem }) {
  return (
    <>
      <li className="px-3">
        <NavLink
          to={navItem.link}
          className="flex items-center gap-3 rounded p-3 dark:text-gray-100 text-black transition-colors  hover:text-[#0084ff]  dark:aria-[current=page]:bg-[#283541] aria-[current=page]:text-black "
        >
          <div className="flex items-center self-center w-6">
            {navItem.icon}
          </div>
        </NavLink>
      </li>
    </>
  );
}
