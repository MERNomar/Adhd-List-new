import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
// Apis and global states
import { useDrawer, useStore } from "../../../../store/todoState";
import { putUpdateTodo } from "../../../../myAPIS";
import Steps from "./Steps";
import StopWatch from "./StopWatch";
import UpdateTitle from "./UpdateTitle";
import { useUser } from "../../../../store/authState";

export default function SidePanel() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const { token } = useUser((state) => state.user);
  const setAllTodos = useStore((store) => store.setAllTasks);
  const allTodos = useStore((store) => store.allTasks);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const allTodosUpdate = allTodos.map((todo) => {
    if (todo._id != sidePanelItem._id) return todo;
    return sidePanelItem;
  });
  useEffect(() => {
    if (!sidePanelItem) return;
    putUpdateTodo(sidePanelItem._id, token, {
      steps: sidePanelItem.steps,
      title: sidePanelItem.title,
      category: sidePanelItem.category,
      root_category: sidePanelItem.root_category,
    });
    setAllTodos(allTodosUpdate);
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
