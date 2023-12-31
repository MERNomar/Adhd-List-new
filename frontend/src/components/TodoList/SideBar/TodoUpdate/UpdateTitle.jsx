import { useState, useEffect } from "react";
import { useDrawer, useStore } from "../../../../store/todoState";
import Arrow from "../../../assets/svg/Arrow";
import Select from "react-select";

export default function UpdateImportantInformation() {
  // save if the item hidden or not in the local storage
  const [hideState, setHideState] = useState(() => {
    const storedValue = localStorage.getItem("HIDE_TITLE");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("HIDE_TITLE", JSON.stringify(hideState));
  }, [hideState]);

  // handle submit function
  return (
    <>
      <div
        className="select-none dropdown-items"
        onClick={() => setHideState(!hideState)}
      >
        <Arrow state={hideState} />
        Update
      </div>
      <div className={`${hideState ? " hidden" : " "} justify-center  mt-1 `}>
        <UpdateForm />
      </div>
    </>
  );
}

function UpdateForm() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);

  const [currentSelectedCategory, setCurrentSelectedCategory] = useState({
    value: "",
    label: "",
  });
  const [currentSelectedRoot, setCurrentSelectedRoot] = useState({
    value: "",
    label: "",
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
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <UpdateTitle />
      <UpdateCategory
        currentSelectedCategory={currentSelectedCategory}
        setCurrentSelectedCategory={setCurrentSelectedCategory}
        currentSelectedRoot={currentSelectedRoot}
        setCurrentSelectedRoot={setCurrentSelectedRoot}
      />
      <div className="w-[95%] justify-center text-center mt-2  hover:shadow-lg  transition-all  shadow-black m-auto border-black border-[1px]  rounded clear-both">
        <button
          type="submit"
          className="w-full transition-colors duration-75 rounded dark:bg-slate-700 bg-neutral-400 dark:hover:bg-slate-600"
        >
          Edit
        </button>
      </div>
    </form>
  );
}

function UpdateTitle() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);

  return (
    <div className="flex justify-center rounded-md py-[1px] px-1 bg-[#00000069]">
      <input
        disabled={!sidePanelItem}
        className="dark:bg-black bg-neutral-200 text-xl font-bold border-slate-700 focus:border-blue-500 p-[10px] rounded shadow-sm w-[280px] click:transition-colors duration-300 outline-[0] border-[#2941913f] border-[1px]  border-solid h-12 m-1 : "
        type="text"
        name="title"
        id="title"
        key={sidePanelItem._id}
        placeholder={sidePanelItem.title}
        defaultValue={sidePanelItem.title}
      />
    </div>
  );
}

function UpdateCategory({
  currentSelectedCategory,
  setCurrentSelectedCategory,
  currentSelectedRoot,
  setCurrentSelectedRoot,
}) {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const allSideRoots = useStore((store) => store.allSideRoots);

  // those options are hardcoded since those will be the default main roots may make them customizable later
  const options = [
    { value: "my-day", label: "My Day" },
    { value: "work", label: "Work" },
    { value: "important", label: "Important" },
  ];

  // this will filter and extract the needed roots and update the state
  const filterFunction = (array, compareItem, param) => {
    return array.filter((item) => {
      if (item[param] === compareItem) return item;
    })[0];
  };
  useEffect(() => {
    const categoryPlaceholder = filterFunction(
      options,
      sidePanelItem.category,
      "value"
    );
    setCurrentSelectedCategory(categoryPlaceholder);
  }, [sidePanelItem]);

  useEffect(() => {
    const selectedRootPlaceholder = filterFunction(
      allSideRoots,
      sidePanelItem.root_category,
      "_id"
    );
    setCurrentSelectedRoot({
      value: selectedRootPlaceholder?._id,
      label: selectedRootPlaceholder?.title,
    });
  }, [sidePanelItem]);

  // Dependent array whenever main root is picked this should filter to the needed array
  const dependentArray = allSideRoots
    .filter((item) => {
      if (item.category != currentSelectedCategory.value) return;
      return item;
    })
    .map((item) => {
      return { value: item._id, label: item.title };
    });

  // the Inputs using react-select NPM
  return (
    <div className="flex c flex-col  mt-1 text-lg dark:bg-neutral-900 w-[98%] m-auto py-1 rounded">
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
  );
}
