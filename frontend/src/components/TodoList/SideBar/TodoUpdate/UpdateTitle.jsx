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
            className="bg-black border-black focus:border-blue-500 p-[10px] rounded shadow-sm w-[220px] click:transition-colors duration-300 outline-[0] border-[#2941913f] border-[1px] text-base border-solid h-8 m-1 : "
            type="text"
            name="title"
            id="title"
            key={sidePanelItem._id}
            placeholder={sidePanelItem.title}
            defaultValue={sidePanelItem.title}
          />
          <button
            className="flex justify-center p-2 m-0 transition-colors duration-100 ease-in-out rounded-full hover:bg-slate-800 w-9"
            type="submit"
          >
            <EditIcon className="m-auto" />
          </button>
        </div>
        <div className="flex justify-around mt-1 text-lg bg-slate-700 w-[90%] m-auto py-1 rounded">
          <Select options={options} />
        </div>
      </form>
    </>
  );
}
