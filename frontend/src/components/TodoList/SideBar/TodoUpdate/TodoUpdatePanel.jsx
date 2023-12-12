// Import svg Items
import UpdateSVG from "@mui/icons-material/SystemUpdateAltOutlined";
// needed libraries
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
// Apis and global states
import { useDrawer, useStore } from "../../../../store/todoState";
import { putUpdateTodo } from "../../../../myAPIS";
import AddSteps from "./AddSteps";
import MapSteps from "./MapSteps";
import StopWatch from "./StopWatch";
import EditIcon from "@mui/icons-material/Edit";

export default function SidePanel() {
  const queryClient = useQueryClient();
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);

  const { mutate, isLoading } = useMutation({
    mutationFn: putUpdateTodo,
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  useEffect(() => {
    if (!sidePanelItem) return;
    mutate({
      id: sidePanelItem._id,
      sidePanelItem: { steps: sidePanelItem.steps, title: sidePanelItem.title },
    });
  }, [sidePanelItem]);
  //* ------------------------ THE END OF IT -----------------

  return (
    <>
      <div className="mt-2">
        {/* This one is hard to figure out right ? :D */}
        <UpdateTitle />
        {/* handle the stop watch and all the timer stuff */}
        <StopWatch />
        {/* adding steps to the task */}
        <AddSteps />
        {/* mapping all the steps and rendering them */}
        <MapSteps />
      </div>
    </>
  );
}

function UpdateTitle() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    setSidePanelItem({ ...sidePanelItem, title: title });
  };
  return (
    <>
      <div>Update</div>
      <form
        className="flex justify-center mt-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="   flex justify-center rounded-md py-[1px] px-1 bg-[#00000069]">
          <input
            disabled={!sidePanelItem}
            className="bg-black border-black focus:border-blue-500  p-[10px] rounded shadow-sm  w-[220px] click:transition-colors	duration-300	  outline-[0]  border-[#2941913f] border-[1px] text-base  border-solid h-8  m-1 : "
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
      </form>
    </>
  );
}
