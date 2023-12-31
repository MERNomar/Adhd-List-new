// needed libraries
import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
// Apis and global states
import { useDrawer } from "../../../../store/todoState";
import Switch from "@mui/material/Switch";
import Arrow from "../../../assets/svg/Arrow";

export default function StopWatch() {
  const sidePanelItem = useDrawer((state) => state.sidePanelItem);
  const setSidePanelItem = useDrawer((state) => state.setSidePanelItem);
  const timeUpdate = sidePanelItem.worked_time;
  const today = new Date();
  const currentDate = new Intl.DateTimeFormat("en-us", { dateStyle: "long" });
  const [hideState, setHideState] = useState(() => {
    const storedValue = localStorage.getItem("HIDE_WATCH");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("HIDE_WATCH", JSON.stringify(hideState));
  }, [hideState]);

  const { minutes, hours, pause, reset, isRunning } = useStopwatch({
    autoStart: false,
  });
  useEffect(() => {
    reset();
    pause();
  }, [sidePanelItem]);

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };
  const logTime = () => {
    // time has to be at least 3 mins or the changes will not take place !
    if (minutes < 3) return;
    const currentTime = timeUpdate + minutes;
    setSidePanelItem({ ...sidePanelItem, worked_time: currentTime });
  };
  // turning the timer on and off and reset in on session
  function handleClick() {
    if (!isRunning) {
      reset();
    } else {
      logTime();
      reset();
      pause();
    }
  }

  return (
    <>
      <hr className="border-[#b2ddee41] my-4"></hr>
      <div
        className="select-none dropdown-items"
        onClick={() => setHideState(!hideState)}
      >
        <Arrow state={hideState} />
        Track Time
      </div>
      <div className={`${hideState ? " hidden" : " "} ml-4`}>
        <div
          className={`flex text-[30px] transition-colors  duration-200 mt-4  ${
            isRunning && "text-[#89c0ed]	"
          }`}
        >
          <div>{`  ${hours} hrs  ${formatTime(minutes)} m`}</div>
          <span className="ml-2 cursor-pointer" onClick={() => handleClick()}>
            <Switch color="primary" checked={isRunning} />
          </span>
        </div>
        <div className="text-sm">Current Session</div>
        <div className="mt-3 mb-3">
          {` Time Worked : ${hours}:${formatTime(timeUpdate)}m`}
          <div className="text-sm text-[#bdbcbc]">
            {currentDate.format(today)}
          </div>
        </div>
      </div>
      <hr className="border-[#b2ddee41] my-4 "></hr>
    </>
  );
}
