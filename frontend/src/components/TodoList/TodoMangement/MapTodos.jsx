import TodoItem from "./TodoItem";
import { useStore } from "../../../store/todoState";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactShortcut from "react-shortcut";

export default function AllTodos() {
  const { title: category, child: rootCategory } = useParams();
  const data = useStore((state) => state.allTasks);
  const [hideCompletedItems, setHideCompletedItems] = useState(true);

  const arrayFilter = data.filter((item) => {
    if (rootCategory) {
      if (rootCategory === item.root_category) return item;
    } else return category === item.category;
  });

  return (
    <>
      <ol>
        {arrayFilter.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              hiddenState={hideCompletedItems}
              items={todo}
            />
          );
        })}
      </ol>
      <ReactShortcut
        keys={"h"}
        onKeysPressed={() => setHideCompletedItems(!hideCompletedItems)}
      />
    </>
  );
}
