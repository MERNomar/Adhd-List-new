import { useState } from "react";
import { setCompleted } from "../../../myAPIS";
import { useDrawer, useStore } from "../../../store/todoState";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useUser } from "../../../store/authState";

export default function TodoItem({ items, hiddenState }) {
  const { _id, title, completed, time, steps } = items;
  const [completedState, setCompletedState] = useState(completed);
  const setSidePanelItem = useDrawer((store) => store.setSidePanelItem);
  const sidePanelItem = useDrawer((store) => store.sidePanelItem);
  const setIsSideNavOpen = useDrawer((store) => store.setIsSideNavOpen);
  const SetSidePanelTab = useDrawer((store) => store.SetSidePanelTab);

  const { token } = useUser((user) => user.user);

  const handlePanelItem = () => {
    setSidePanelItem(items);
    SetSidePanelTab(true);
    setIsSideNavOpen(true);
  };

  const checkSidePanel = () => {
    return _id === sidePanelItem?._id;
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setCompletedState(!completedState);
    setCompleted(_id, token, !completedState);
  };
  // global state
  //----
  return (
    <li
      className={` li-item
      ${
        completedState &&
        hiddenState &&
        "hidden side-panel-change   border-b-2 "
      }  ${completedState && " border-b-green-500 "}  ${
        checkSidePanel() &&
        "dark:bg-[#1c1e24] bg-white hover:bg-white  border-b-blue-500 border-b-4 shadow-sm shadow-transparent"
      }  h-[70px] text-ellipsis whitespace-nowrap overflow-hidden hover:bg-white dark:bg-[#1c1e24] bg-white dark:text-white text-black `}
      onClick={() => handlePanelItem()}
    >
      <div className="m-auto ml-2 ">{title}</div>
      <div
        onClick={(e) => handleClick(e)}
        className={`
        ${checkSidePanel() && "text-4xl mr-9"}
        my-auto mr-5 text-3xl text-center  transition-all duration-75    hover:text-green-300`}
      >
        {completedState ? (
          <CheckCircleOutlineIcon
            fontSize="inherit"
            className="text-5xl text-green-400 font "
          />
        ) : (
          <RadioButtonUncheckedIcon fontSize="inherit" />
        )}
      </div>
    </li>
  );
}
