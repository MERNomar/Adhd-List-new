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
          <h3 className="m-auto mt-5 text-4xl text-center text-blue-300 animate-bounce">
            Add {category} Todos Now !{" "}
          </h3>
        ) : (
          categoryFilter.map((todo) => {
            return <TodoItem key={todo._id} items={todo} />;
          })
        )}
      </ol>
    </>
  );
}
