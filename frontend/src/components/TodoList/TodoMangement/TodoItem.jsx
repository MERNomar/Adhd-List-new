import { useState } from "react";
import { setCompleted } from "../../../myAPIS";
import { useStore } from "../../../store/todoState";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useUser } from "../../../store/authState";

export default function TodoItems({ items }) {
  const { _id, title, completed, time, steps } = items;
  const [completedState, setCompletedState] = useState(completed);
  const setSidePanelItem = useStore((store) => store.setSidePanelItem);
  const sidePanelItem = useStore((store) => store.sidePanelItem);
  const { token } = useUser((user) => user.user);

  const handlePanelItem = () => {
    setSidePanelItem(items);
  };

  const checkSidePanel = () => {
    return _id === sidePanelItem._id;
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setCompletedState(true);
  };
  // global state
  //----
  return (
    <li
      className={` li-item ${
        completedState && "border-b-green-500  border-b-2 ele"
      }  ${
        checkSidePanel() &&
        "bg-[#1c1e24] hover:bg-[#1c1e24] border-b-blue-500 border-b-4 shadow-sm shadow-transparent"
      }`}
      onClick={() => handlePanelItem()}
    >
      <div className="m-auto ml-2">{title}</div>
      <div
        onClick={(e) => handleClick(e)}
        className="my-auto mr-5 text-3xl transition-all duration-200 hover:text-4xl hover:text-green-300"
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
