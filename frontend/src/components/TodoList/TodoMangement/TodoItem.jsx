import { useEffect, useState } from "react";
import {setCompleted} from "../../../myAPIS"
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../../../store/todoState";
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckRounded } from "@mui/icons-material";


export default function TodoItems({items}) {
  const {_id , title , completed , time , steps} = items;
  const [completedState , setCompletedState] = useState(completed)
  const setSidePanelItem = useStore(store => store.setSidePanelItem)
  const sidePanelItem = useStore(state => state.sidePanelItem)
  
  const handlePanelItem = () => {
    setSidePanelItem(items)
  }   

  const handleClick = (e) => {
    setCompletedState(true)
    setCompleted (_id)
  }   
  // global state 
  //----
  return (
    <ListItemButton onClick={() => handlePanelItem() } >
    <ListItemText
      primary={ sidePanelItem._id === _id ? sidePanelItem.title : title }
    />
        <Checkbox checked={completedState} onClick={() => handleClick()}/>
  </ListItemButton>

  );
}











//  <NavLink className=" hover:bg-[#283541]  px-3 py-3 mb-2 flex text-gray-100 border-b-gray-500 border-b justify-between" 
//to={`todo/${_id}`} >
//<div>
 // <div   style={completedState ?{color :'#2e7d32', textDecoration : 'line-through'} : {}} 
 // className=" select-none focus:bg-blue-950" 
//>
 { /** this check if the Item is used in side panel and if it is , it will update instantly instead of waiting to update */}
 // {sidePanelItem._id === _id ? sidePanelItem.title : title}
//  </div>
//</div>
//<div className="text-white" onClick={(e) => handleClick(e)} >
//<Checkbox checked={completedState} sx={{color : "white"}} size="medium" color="success"/>
    //  </div>
//</NavLink>









