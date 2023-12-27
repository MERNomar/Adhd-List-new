import TodoItem from "./TodoItem";
import { useStore } from "../../../store/todoState";
import { useParams } from "react-router-dom";

export default function AllTodos() {
  const { title: category, child: rootCategory } = useParams();
  const data = useStore((state) => state.allTasks);
  const arrayFilter = data.filter((item) => {
    if (rootCategory) {
      if (rootCategory === item.root_category) return item;
    } else return category === item.category;
  });
  const categoryFilter = arrayFilter.reverse();

  return (
    <>
      <ol>
        {categoryFilter.map((todo) => {
          return <TodoItem key={todo._id} items={todo} />;
        })}
      </ol>
    </>
  );
}
