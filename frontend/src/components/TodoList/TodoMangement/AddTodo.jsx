import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function AddTodo({ category, mutate }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = title;
    const todo = {
      title: inputValue,
      category: category ? category : "null",
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
      className="flex h-20 w-[97%] m-auto bg-[#15171c] p-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="p-1 mr-[7px] my-auto text-xl w-[98%] focus:border-blue-900  focus:border-2 outline-none bg-black border-[1px] border-stone-700  h-12"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="pl-2 ml-1 border-l-2 my-auto border-l-[#ffffff54]">
        <button
          className="p-1 my-auto text-blue-700 transition-colors ease-in-out rounded hover:duration-100 active:duration-0 active:bg-slate-700 hover:bg-slate-800"
          type="submit"
        >
          <AddIcon color="inherit" fontSize="large" />
        </button>
      </div>
    </form>
  );
}
