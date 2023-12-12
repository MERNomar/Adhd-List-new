import RoundPlus from "@mui/icons-material/AddCircleOutlined";
import { useDrawer } from "../../../../store/todoState";

export default function AddSteps() {
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
  };

  return (
    <>
      <div>Steps</div>
      <form
        className="flex justify-center "
        onSubmit={(e) => {
          handleNewStep(e);
        }}
      >
        <label className="  flex justify-center rounded-md py-[1px] px-1 bg-[#00000069]">
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
