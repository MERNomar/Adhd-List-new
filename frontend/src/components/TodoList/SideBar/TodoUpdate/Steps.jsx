import { useEffect, useState } from "react";
import { useDrawer } from "../../../../store/todoState";
import RoundPlus from "@mui/icons-material/AddCircleOutline";
import Arrow from "../../../assets/svg/Arrow";

export default function Steps() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const [hideState, setHideState] = useState(() => {
    const storedValue = localStorage.getItem("HIDE_STEPS");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("HIDE_STEPS", JSON.stringify(hideState));
  }, [hideState]);

  return (
    <>
      <div
        className="select-none dropdown-items"
        onClick={() => setHideState(!hideState)}
      >
        <Arrow state={hideState} />
        Steps
      </div>
      <div className={`${hideState ? " hidden" : " "}    `}>
        <AddSteps />
        <MapSteps />
      </div>
    </>
  );
}

function MapSteps() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.updateSidePanel);
  if (sidePanelItem.steps.length === 0) {
    return (
      <>
        <div htmlFor="step" className="text-base text-blue-100 ">
          Add Steps !
        </div>
      </>
    );
  }
  return (
    <>
      <ol className="h-52 overflow-auto  text-center  mx-[5px] ">
        {sidePanelItem.steps.map((item) => {
          return (
            <li
              className=" text-base bg-[#00000036] flex justify-between p-[2px] cursor-pointer hover:text-[#67a5df] hover:transition-colors duration-100 text-blue-100 show"
              key={item.id}
            >
              <div className="mx-5">{item.step}</div>
              {/* <div className="mx-5">{item?.time_expected}</div> */}
            </li>
          );
        })}
      </ol>
    </>
  );
}

function AddSteps() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);

  // update the global state and send api request to update the item
  const handleNewStep = (event) => {
    event.preventDefault();
    const InputValue = event.target.title.value;
    if (InputValue.length === 0) return;
    setSidePanelItem({
      ...sidePanelItem,
      steps: [
        ...sidePanelItem.steps,
        { id: crypto.randomUUID(), step: InputValue },
      ],
    });
    event.target.title.value = "";
  };

  return (
    <>
      <form
        className="flex justify-center "
        onSubmit={(e) => {
          handleNewStep(e);
        }}
      >
        <label className="  flex justify-center w-full bg-[#00000069]">
          <input
            disabled={!sidePanelItem}
            className="bg-black border-black focus:border-blue-500  p-[10px] rounded shadow-sm  w-[220px] click:transition-colors	duration-300	  outline-[0]  border-[#2941913f] border-[1px] text-base  border-solid h-8  m-1 : "
            type="text"
            name="title"
            id="title"
            key={sidePanelItem._id}
            placeholder={"Keep it simple!"}
          />
          <button
            className="flex justify-center p-2 m-0 transition-colors duration-100 ease-in-out rounded-full hover:bg-slate-800"
            type="submit"
          >
            <RoundPlus className="" />
          </button>
        </label>
      </form>
    </>
  );
}
