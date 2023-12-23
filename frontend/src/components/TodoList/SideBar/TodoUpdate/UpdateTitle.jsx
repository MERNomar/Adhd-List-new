import { useState, useEffect } from "react";
import { useDrawer, useStore } from "../../../../store/todoState";
import EditIcon from "@mui/icons-material/Edit";
import Arrow from "../../../assets/svg/Arrow";
import Select from "react-select";

export default function UpdateTitle() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);
  const allSideRoots = useStore((store) => store.allSideRoots);

  // save if the item hidden or not in the local storage
  const [hideState, setHideState] = useState(() => {
    const storedValue = localStorage.getItem("HIDE_TITLE");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("HIDE_TITLE", JSON.stringify(hideState));
  }, [hideState]);

  // handle submit function

  const options = [
    { value: "my-day", label: "My Day" },
    { value: "work", label: "Work" },
    { value: "important", label: "Important" },
  ];

  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(() => {
    const item = options.filter((option) => {
      if (option.value === sidePanelItem.category) return option;
    })[0];
    return { value: item.value, label: item.label };
  });

  const [currentSelectedRoot, setCurrentSelectedRoot] = useState(() => {
    if (sidePanelItem.root_category === null) return { value: "", label: "" };
    const item = allSideRoots.filter((option) => {
      if (option._id === sidePanelItem.root_category) return option;
    })[0];
    return { value: item?._id, label: item?.title };
  });
  console.log(currentSelectedRoot);

  const dependentArray = allSideRoots
    .filter((item) => {
      if (item.category != currentSelectedCategory.value) return;
      return item;
    })
    .map((item) => {
      return { value: item._id, label: item.title };
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    setSidePanelItem({
      ...sidePanelItem,
      title: title,
      category: currentSelectedCategory.value,
      root_category: currentSelectedRoot.value,
    });
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
        <div className="flex c flex-col  mt-1 text-lg bg-neutral-900 w-[98%] m-auto py-1 rounded">
          <Select
            value={currentSelectedCategory}
            classNamePrefix={"react-select"}
            onChange={(e) => {
              setCurrentSelectedCategory(e);
              setCurrentSelectedRoot("");
            }}
            className="mb-3 react-select-container"
            options={options}
          />
          <Select
            className="react-select-container"
            onChange={(e) => {
              setCurrentSelectedRoot(e);
            }}
            classNamePrefix={"react-select"}
            options={dependentArray}
            value={currentSelectedRoot}
          />
        </div>
        <div className="w-[95%] justify-center text-center mt-2  hover:shadow-lg  transition-all  shadow-black m-auto border-black border-[1px]  rounded clear-both">
          <button
            type="submit"
            className="w-full transition-colors duration-75 rounded bg-slate-700 hover:bg-slate-600"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  );
}
