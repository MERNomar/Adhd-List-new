import { useUserPanel } from "../../../store/todoState";
import { motion } from "framer-motion";
export default function UserPanelNavBar() {
  const setIsUserPanelOpen = useUserPanel((store) => store.setIsUserPanelOpen);

  return (
    <motion.div
      onClick={() => {
        setIsUserPanelOpen(false);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full z-[80] flex fixed top-0 bottom-0 left-0 right-0 bg-black/70 transition-100 transition-colors"
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mx-auto my-auto text-white bg-black rounded w-[70%] h-[70%] 2xl:w-full  "
      ></motion.div>
    </motion.div>
  );
}
