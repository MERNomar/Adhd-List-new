import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { postTodo } from "../../../myAPIS";
import { useUser } from "../../../store/authState";
import { useStore } from "../../../store/todoState";
export default function AddTodo({ category }) {
  const { child: currentRootRoute } = useParams();
  const { token } = useUser((user) => user.user);
  const allTasks = useStore((store) => store.allTasks);
  const setAllTasks = useStore((store) => store.setAllTasks);
  const [errorState, setErrorState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length <= 3) return setErrorState("This Title is too short");
    if (title.length >= 80) return setErrorState("This Title is too long");
    setIsLoading(true);
    const todo = {
      _id: "dummy",
      title: title,
      category: category ? category : "null",
      root_category: currentRootRoute ? currentRootRoute : "null",
      completed: false,
      important: false,
      worked_time: 0,
      steps: [],
    };
    setAllTasks([...allTasks, todo]);
    const { _id, ...NewTodo } = todo;
    const res = await postTodo(NewTodo, token);
    setAllTasks([...allTasks, res]);
    if (title.length === 0) return;
    setIsLoading(false);
    setErrorState(null);
    setTitle("");
  };

  return (
    <>
      <form
        className="  flex h-16 w-[97%] m-auto bg-[#15171c] rounded px-2"
        onSubmit={(e) => handleSubmit(e)}
        disabled={isLoading}
      >
        <input
          className={`
          ${errorState ? "border-red-500" : " focus:border-blue-900 "}
          z-40 p-1 mr-[7px] my-auto text-xl w-[98%]  px-2  outline-none bg-black border-[1px] border-stone-500  h-12`}
          placeholder="Add Todo"
          value={title}
          disabled={isLoading}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="pl-2 ml-1 border-l-2 my-auto border-l-[#ffffff54]">
          <button
            className="p-1 my-auto text-blue-700 transition-colors ease-in-out rounded hover:duration-100 active:duration-0 active:bg-slate-700 hover:bg-slate-800"
            type="submit"
            disabled={isLoading}
          >
            <AddIcon
              className="hover:animate-spin"
              color="inherit"
              fontSize="large"
            />
          </button>
        </div>
        <div
          className={`
        ${errorState ? "border-b-red-500" : " border-b-blue-500 "}
        absolute h-[62px] w-[60%] border-b-2 z-0  animate-pulse`}
        ></div>
      </form>
    </>
  );
}
