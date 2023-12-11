import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


export default function AddTodo({ category, mutate }) {
    const [title , setTitle] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault()
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
      <div className="m-5    mt-5">
     <form
      onSubmit={e => handleSubmit(e)}
    >
      <input
        placeholder="Add Todo"
          value={title}
        onChange={e => setTitle(e.target.value)}
      />
             <AddIcon/>
    </form>
    </div>
    );
  }