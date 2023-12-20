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

export default function CustomCategories() {
  const navItemsOpj = [
    {
      id: crypto.randomUUID(),
      icon: <MyDaySVG />,
      link: "my-day",
    },
    {
      id: crypto.randomUUID(),
      icon: <WorkSVG />,
      link: "work",
    },
    {
      id: crypto.randomUUID(),
      icon: <ImportantSVG />,
      link: "important",
    },
  ];

  return (
    <nav
      aria-label="side navigation"
      className="flex-1 divide-slate-100 overflow-auto border-r-[1px]  border-[#2d888011] bg-[#23272f] "
    >
      <div>
        {/* This will map the top icons ( main categories ) */}
        <ul className="flex justify-center flex-1 gap-1 py-3 ">
          {navItemsOpj.map((navItem) => {
            return <NavItem key={navItem.id} navItem={navItem} />;
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
  const setCurrentRoot = useStore((store) => store.setCurrentRoot);
  const currentRoot = useStore((store) => store.currentRoot);
  const { token } = useUser((user) => user.user);
  const filterRoot = allSideRoots.filter((item) => {
    return item.category === currentPage;
  });

  const { title: category } = useParams();
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const item = { title, category: category, completed: false };
    postRootCategories(item, token);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className={`justify-center  mt-1 `}>
        <div className="flex justify-center rounded-md py-[1px]   bg-[#00000069]">
          <input
            className="bg-black border-black focus:border-blue-500 p-[10px] rounded shadow-sm w-[220px] click:transition-colors duration-300 outline-[0] border-[#2941913f] border-[1px] text-base border-solid h-8 m-1 : "
            type="text"
            name="title"
            id="title"
          />
          <button
            className="flex justify-center p-2 m-0 transition-colors duration-100 ease-in-out rounded-full hover:bg-slate-800 w-9"
            type="submit"
          >
            <AddIcon className="m-auto text-blue-500" />
          </button>
        </div>
      </form>{" "}
      <ul className="flex flex-col justify-center flex-1 gap-1 py-2 font-medium">
        {filterRoot.map((item) => {
          return (
            <li className="px-3 text-base transition-colors" key={item._id}>
              <NavLink
                to={currentPage + "/" + item._id}
                className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
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
          className="flex items-center gap-3 rounded p-3 text-gray-100 transition-colors  hover:text-[#0084ff]  aria-[current=page]:bg-[#283541] aria-[current=page]:text-gray-100 "
        >
          <div className="flex items-center self-center w-6">
            {navItem.icon}
          </div>
        </NavLink>
      </li>
    </>
  );
}
