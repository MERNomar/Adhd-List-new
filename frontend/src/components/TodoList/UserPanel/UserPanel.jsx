import { useUserPanel } from "../../../store/todoState";
import { motion } from "framer-motion";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import SettingsTap from "./SettingsTap";
import StatisticsTap from "./StatisticsTap";

export default function UserPanelNavBar() {
  const [openTap, setOpenTap] = useState(true);
  return (
    <ModalFrame>
      <UserPanelTaps setOpenTap={setOpenTap} openTap={openTap} />
      {openTap ? <SettingsTap /> : <StatisticsTap />}
    </ModalFrame>
  );
}

function ModalFrame({ children }) {
  const setIsUserPanelOpen = useUserPanel((store) => store.setIsUserPanelOpen);
  const isUserPanelOpen = useUserPanel((store) => store.isUserPanelOpen);

  return (
    <motion.div
      onClick={() => {
        setIsUserPanelOpen(false);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`
      ${!isUserPanelOpen && "hidden"}
      w-full h-full z-[80] flex fixed top-0 bottom-0 left-0 right-0 bg-black/70 transition-100 transition-colors`}
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mx-auto my-auto text-white bg-[#1a1d23] rounded w-[97%] h-[500px]  lg:h-[700px] sm:w-[70%] transition-all "
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: "easeIn",
            duration: 0.15,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function UserPanelTaps({ setOpenTap, openTap }) {
  return (
    <>
      <div className={`w-full h-[10%] flex justify-around bg-[#0b0d0f] `}>
        <button
          onClick={() => {
            setOpenTap(true);
          }}
          className={`w-full text-sm transition-colors bg-black lg:text-lg hover:bg-gray-900  ${
            openTap && "bg-gray-800 hover:bg-gray-800"
          }`}
        >
          Settings <ManageAccountsIcon />
        </button>
        <button
          onClick={() => {
            setOpenTap(false);
          }}
          className={`w-full text-sm transition-colors bg-black lg:text-lg hover:bg-gray-900 ${
            !openTap && "bg-gray-800 hover:bg-gray-800"
          }`}
        >
          Statistics
          <ShowChartIcon />
        </button>
      </div>
    </>
  );
}
