import RoundPlus from '@mui/icons-material/AddCircleOutlined';
import { useStore } from "../../../../store/todoState"


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
  
    return (<>
    <div>Steps</div>
      <form
      className=" flex justify-center"
      onSubmit={(e) => {
        handleNewStep(e);
      }}
    >
    <label
     className="  flex justify-center rounded-md py-[1px] px-1 bg-[#00000069]" 
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
              <button className=' rounded-full transition-colors ease-in-out duration-100 hover:bg-slate-800 m-0 flex justify-center p-2'  type='submit'>
                <RoundPlus className=''  />
                </button>
              </label>
    </form>
    </>
    );
  }