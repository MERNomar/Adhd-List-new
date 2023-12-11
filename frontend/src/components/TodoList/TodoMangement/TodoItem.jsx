import { useState } from "react";
import {setCompleted} from "../../../myAPIS"
import { useStore } from "../../../store/todoState";


export default function TodoItems({items}) {
  const {_id , title , completed , time , steps} = items;
  const [completedState , setCompletedState] = useState(completed)
  const setSidePanelItem = useStore(store => store.setSidePanelItem)
  const sidePanelItem = useStore(store => store.sidePanelItem)
  
  const handlePanelItem = () => {
    setSidePanelItem(items)
  }   

  const checkSidePanel = () => {
    return _id === sidePanelItem._id
  }
  const handleClick = (e) => {
    setCompletedState(true)
    setCompleted (_id)
  }   
  // global state 
  //----
  return (
    <li className="flex justify-between border-b-[1px] border-b-[#ffffff48] bg-[#242526] h-10 m-1 " onClick={() => handlePanelItem() } >
        <div className="ml-2">{title}</div>
        <input className="mr-2" type="checkbox" checked={completed} onChange={() => handleClick()}  />
    </li>
  );
}

















