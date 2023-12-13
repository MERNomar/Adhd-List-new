import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
// Apis and global states
import { useDrawer } from "../../../../store/todoState";
import { putUpdateTodo } from "../../../../myAPIS";
import Steps from "./Steps";
import StopWatch from "./StopWatch";
import UpdateTitle from "./UpdateTitle";

export default function SidePanel() {
  const queryClient = useQueryClient();
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);

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
        <div className="h-8 m-2 overflow-hidden font-bold text-center text-blue-300 whitespace-nowrap text-ellipsis">
          {sidePanelItem.title}
        </div>
        {/* This one is hard to figure out right ? :D */}
        <UpdateTitle />
        {/* handle the stop watch and all the timer stuff */}
        <StopWatch />
        {/* adding steps to the task */}
        <Steps />
      </div>
    </>
  );
}
