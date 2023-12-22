import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
// Apis and global states
import { useDrawer } from "../../../../store/todoState";
import { putUpdateTodo } from "../../../../myAPIS";
import Steps from "./Steps";
import StopWatch from "./StopWatch";
import UpdateTitle from "./UpdateTitle";
import { useUser } from "../../../../store/authState";

export default function SidePanel() {
  const queryClient = useQueryClient();
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const { token } = useUser((state) => state.user);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const { mutate, isLoading } = useMutation({
    mutationFn: () => putUpdateTodo(),
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  useEffect(() => {
    if (!sidePanelItem) return;
    putUpdateTodo({
      id: sidePanelItem._id,
      token,
      sidePanelItem: { steps: sidePanelItem.steps, title: sidePanelItem.title },
    });
    // mutate({
    //   id: sidePanelItem._id,
    //   sidePanelItem: { steps: sidePanelItem.steps, title: sidePanelItem.title },
    // });
  }, [sidePanelItem]);
  //* ------------------------ THE END OF IT -----------------
  useEffect(() => {
    setAnimationTrigger(!animationTrigger);
  }, [sidePanelItem]);

  return (
    <>
      <div className={`mt-2 ${!animationTrigger && "side-panel-change"}`}>
        <div className={`mt-2 ${animationTrigger && "side-panel-change"} `}>
          {/* This one is hard to figure out right ? :D */}
          <UpdateTitle />
          {/* handle the stop watch and all the timer stuff */}
          <StopWatch />
          {/* adding steps to the task */}
          <Steps />
        </div>
      </div>
    </>
  );
}
