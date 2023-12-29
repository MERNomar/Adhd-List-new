import { useEffect } from "react";
import AddTodo from "./AddTodo";
import MapTodos from "./MapTodos";
import { useStore } from "../../../store/todoState";
import { useParams } from "react-router-dom";

export default function TodoList() {
  const { title: category } = useParams();

  const setCurrentPage = useStore((store) => store.setCurrentPage);

  useEffect(() => {
    setCurrentPage(category);
  }, [category]);

  const data = useStore((store) => store.allTasks);

  if (!data) return;

  return (
    <>
      {/*header*/}
      <div className=" overflow-auto transition-colors duration-100 bg-neutral-300 dark:bg-[#22252c] m-3 text-gray-100 flex-grow h-[78vh]">
        <MapTodos category={category} data={data} />
      </div>

      <AddTodo category={category} />
    </>
  );
}
