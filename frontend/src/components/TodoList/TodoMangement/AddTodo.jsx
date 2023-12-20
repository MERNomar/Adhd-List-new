import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { useUser } from "../../../store/authState";

export default function AddTodo({ category, mutate }) {
  const { child: currentRootRoute } = useParams();

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = title;
    const todo = {
      title: inputValue,
      category: category ? category : "null",
      root_category: currentRootRoute ? currentRootRoute : "null",
      completed: false,
      important: false,
      worked_time: 0,
      steps: [],
    };
    if (inputValue.length === 0) return;
    mutate(todo);
    setTitle("");
  };

  return (
    <form
      className="  flex h-16 w-[97%] m-auto bg-[#15171c] rounded px-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className=" z-40 p-1 mr-[7px] my-auto text-xl w-[98%] focus:border-blue-900 px-2  focus:border-2 outline-none bg-black border-[1px] border-stone-500  h-12"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="pl-2 ml-1 border-l-2 my-auto border-l-[#ffffff54]">
        <button
          className="p-1 my-auto text-blue-700 transition-colors ease-in-out rounded hover:duration-100 active:duration-0 active:bg-slate-700 hover:bg-slate-800"
          type="submit"
        >
          <AddIcon
            className="hover:animate-spin"
            color="inherit"
            fontSize="large"
          />
        </button>
      </div>
      <div className="absolute h-[62px] w-[60%] border-b-2 z-0 border-b-blue-500 animate-pulse "></div>
    </form>
  );
}
