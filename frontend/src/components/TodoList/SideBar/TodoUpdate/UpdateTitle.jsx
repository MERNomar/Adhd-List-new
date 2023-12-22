import { useState, useEffect } from "react";
import { useDrawer } from "../../../../store/todoState";
import EditIcon from "@mui/icons-material/Edit";
import Arrow from "../../../assets/svg/Arrow";
import Select from "react-select";

export default function UpdateTitle() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [hideState, setHideState] = useState(() => {
    const storedValue = localStorage.getItem("HIDE_TITLE");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("HIDE_TITLE", JSON.stringify(hideState));
  }, [hideState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    setSidePanelItem({ ...sidePanelItem, title: title });
  };

  return (
    <>
      <div
        className="select-none dropdown-items"
        onClick={() => setHideState(!hideState)}
      >
        <Arrow state={hideState} />
        Update
      </div>
      <form
        className={`${hideState ? " hidden" : " "} justify-center  mt-1 `}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex justify-center rounded-md py-[1px] px-1 bg-[#00000069]">
          <input
            disabled={!sidePanelItem}
            className="bg-black text-xl font-bold border-slate-700 focus:border-blue-500 p-[10px] rounded shadow-sm w-[280px] click:transition-colors duration-300 outline-[0] border-[#2941913f] border-[1px]  border-solid h-12 m-1 : "
            type="text"
            name="title"
            id="title"
            key={sidePanelItem._id}
            placeholder={sidePanelItem.title}
            defaultValue={sidePanelItem.title}
          />
        </div>
        <div className="flex justify-around mt-1 text-lg bg-neutral-900 w-[98%] m-auto py-1 rounded">
          <Select
            classNamePrefix={"react-select"}
            className="react-select-container"
            options={options}
          />
          <Select
            className="react-select-container"
            classNamePrefix={"react-select"}
            options={options}
          />
        </div>
        <div className="w-[95%] justify-center text-center mt-2  hover:shadow-lg  transition-all  shadow-black m-auto border-black border-[1px]  rounded clear-both">
          <button className="w-full transition-colors duration-75 rounded bg-slate-700 hover:bg-slate-600">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}
