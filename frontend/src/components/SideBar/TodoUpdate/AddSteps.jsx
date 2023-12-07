import RoundPlus from '@mui/icons-material/AddCircleOutlined';
import { useStore } from "../../../store/todoState"
import { IconButton } from "@mui/material";


export default function AddSteps() {
    const sidePanelItem = useStore(state => state.sidePanelItem)
    const setSidePanelItem = useStore(state => state.setSidePanelItem)
    
    // update the global state and send api request to update the item
    const handleNewStep = (event) => {
      event.preventDefault();
      console.log(event)
      const InputValue = event.target.title.value
      if (InputValue.length === 0) return;
      console.log(InputValue)
      setSidePanelItem({...sidePanelItem , steps : [...sidePanelItem.steps , {id : crypto.randomUUID() , step : InputValue}]});
    }
  
    return (
      <form
      className="mt-5 flex justify-center"
      onSubmit={(e) => {
        handleNewStep(e);
      }}
    >
    <div
     className="  w-[99%]  rounded-md py-[1px] px-1 bg-[#00000069]" 
     >
              <input
                disabled={!sidePanelItem}
                className="bg-black border-black focus:border-blue-500  p-[10px] rounded shadow-sm  w-[220px] click:transition-colors	duration-300	  outline-[0]  border-[#2941913f] border-[1px] text-base  border-solid h-8  m-1 : "
                type="text"
                name="title"
                id="title"
                key={sidePanelItem._id}
                placeholder={"Keep it simple!"}
              />
              <IconButton type='submit'>
                <RoundPlus   />
                </IconButton>
              </div>
    </form>
    );
  }