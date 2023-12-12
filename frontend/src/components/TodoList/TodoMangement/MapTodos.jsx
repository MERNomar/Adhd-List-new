import TodoItem from "./TodoItem";
import { useStore } from "../../../store/todoState";

export default function AllTodos({ category }) {
  const data = useStore((state) => state.allTasks);
  const arrayFilter = data.filter((item) => {
    if (item.completed) return;
    if (category === "all") return item;
    return item.category === category;
  });

  const categoryFilter = arrayFilter.reverse();

  return (
    <>
      <ol>
        {/* This will check if there is not todos */}
        {arrayFilter.length === 0 ? (
          <p>Add {category} Todos Now ! </p>
        ) : (
          categoryFilter.map((todo) => {
            return <TodoItem key={todo._id} items={todo} />;
          })
        )}
      </ol>
    </>
  );
}
