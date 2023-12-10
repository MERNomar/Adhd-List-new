
import { useStore } from "../../../../store/todoState"



export default function MapSteps(){
    const sidePanelItem = useStore(state => state.sidePanelItem)
    const setSidePanelItem = useStore(state => state.updateSidePanel)
    if (sidePanelItem.steps.length === 0)
      return (
        <div htmlFor="step" className=" text-base  text-blue-100 ">
          Add Steps !
        </div>
      );
    return (
      <>
      <ol className="h-72 overflow-auto  text-center rounded mx-[5px] ">
        {sidePanelItem.steps.map((item) => {
          return (
            <li
              className=" text-base bg-[#00000036] flex justify-between p-[2px] cursor-pointer hover:text-[#67a5df] hover:transition-colors duration-100 text-blue-100 show"
              key={item.id}
            >
              <div className="mx-5">{item.step}</div>
              {/* <div className="mx-5">{item?.time_expected}</div> */}
            </li>
          );
        })}
        </ol>
      </>
    );
  }