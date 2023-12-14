import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../../../myAPIS";
import AddTodo from "./AddTodo";
import MapTodos from "./MapTodos";
import { useStore } from "../../../store/todoState";
import { useUser } from "../../../store/authState";

export default function TodoList({ category, header }) {
  const { token } = useUser((user) => user.user);
  document.title = `AdhdList | ${header}`;
  const queryClient = useQueryClient();

  const setCurrentPage = useStore((store) => store.setCurrentPage);

  useEffect(() => {
    setCurrentPage(category);
  }, [category]);

  const data = useStore((store) => store.allTasks);
  const { mutate } = useMutation({
    mutationFn: (todo) => postTodo(todo, token),
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  if (!data) return;

  return (
    <>
      {/*header*/}
      <div className=" overflow-auto bg-[#22252c] m-3 text-gray-100 flex-grow h-[78vh]">
        <MapTodos category={category} data={data} />
      </div>

      <AddTodo mutate={mutate} category={category} />
    </>
  );
}

// function MapTodos({ category, data, isLoading, loadingTodo }) {
//   const categoryFilter = data.filter((item) => {
//     return item.category === category;
//   });

//   return (
//     <>
//       <ol className=" mb-5 overflow-auto min-h-[200px] h-[50%] ">
//         {categoryFilter.length === 0 && (
//           <p className="mb-9">No Todos Today !</p>
//         )}
//         {categoryFilter.map((todo) => {
//           return <TodoItems key={todo._id} items={todo} />;
//         })}
//         {isLoading ? <TodoItems items={loadingTodo} /> : null}
//       </ol>
//     </>
//   );
// }
