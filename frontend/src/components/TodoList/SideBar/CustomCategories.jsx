import AllTasksSVG from "@mui/icons-material/FactCheckOutlined";
import MyDaySVG from "@mui/icons-material/WbTwilightOutlined";
import WorkSVG from "@mui/icons-material/BusinessCenterOutlined";
import HomeSVG from "@mui/icons-material/HomeOutlined";
import ImportantSVG from "@mui/icons-material/StarPurple500Outlined";
import SadFaceSVG from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Arrow from "../../assets/svg/Arrow";
import { useStore } from "../../../store/todoState";

export default function CustomCategories() {
  const navItemsOpj = [
    {
      id: crypto.randomUUID(),
      icon: <MyDaySVG />,
      link: "my-day",
      children: [
        { id: crypto.randomUUID(), title: "child1" },
        { id: crypto.randomUUID(), title: "child2" },
      ],
    },
    {
      id: crypto.randomUUID(),
      icon: <WorkSVG />,
      link: "work",
      children: [
        { id: crypto.randomUUID(), title: "child3" },
        { id: crypto.randomUUID(), title: "child4" },
      ],
    },
    {
      id: crypto.randomUUID(),
      icon: <ImportantSVG />,
      link: "important",
      children: [
        { id: crypto.randomUUID(), title: "child5" },
        { id: crypto.randomUUID(), title: "child6" },
      ],
    },
  ];

  return (
    <nav
      aria-label="side navigation"
      className="flex-1 divide-slate-100 overflow-auto border-r-[1px]  border-[#2d888011] bg-[#23272f] "
    >
      <div>
        <ul className="flex justify-center flex-1 gap-1 py-3 ">
          {navItemsOpj.map((navItem) => {
            return <NavItem key={navItem.id} navItem={navItem} />;
          })}
        </ul>
      </div>
      <dir className="w-[90%] h-[1px] m-auto bg-[#ffffff50]"></dir>
      <ul></ul>
    </nav>
  );
}

function NavItem({ navItem }) {
  const currentPage = useStore((store) => store.currentPage);
  const isCurrentPage = currentPage === navItem.link;
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
