import { Box, List , Typography , ListItem} from "@mui/material";
import TodoItem from "./TodoItem";
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import { useStore } from "../../store/todoState";


export default function AllTodos({ category }) {
    const data = useStore(state => state.allTasks)
    const arrayFilter = data.filter((item) => {
      if(category === 'all') return item
      return item.category === category;
    });
   
    const categoryFilter = arrayFilter.reverse()
 
    return (
      <>
        <Box
          sx={{
            width: "100%",
          }}
        >
            <List>
            <TransitionGroup>  
              {/* This will check if there is not todos */}
            {arrayFilter.length === 0 ?
            <Collapse><ListItem><Typography  variant="h3">Add {category} Todos Now ! </Typography></ListItem></Collapse> :
             categoryFilter.map((todo) => { return <Collapse key={todo._id}><TodoItem items={todo} /></Collapse>})  }
            </TransitionGroup>
            </List>
        </Box>
      </>
    );
  }
  