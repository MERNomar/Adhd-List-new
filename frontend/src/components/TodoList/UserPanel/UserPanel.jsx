import { useUserPanel } from "../../../store/todoState";
import { motion } from "framer-motion";
export default function UserPanelNavBar() {
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
        className="mx-auto my-auto text-white bg-black rounded w-[97%] h-[70%] sm:w-[70%] transition-all "
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
      ></motion.div>
    </motion.div>
  );
}
