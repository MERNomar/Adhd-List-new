import { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
     <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      onSubmit={e => handleSubmit(e)}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add Todo"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
     
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit"   color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddIcon/>
      </IconButton>
    </Paper>
    </div>
    );
  }