import { Outlet } from "react-router-dom";
import SideDrawer from "./SideBar/SideDrawer";
import { useQuery } from "react-query";
import { getTodos } from "../../myAPIS";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDrawer , useStore } from "../../store/todoState";
import NavBar from "./NavBar/NavBar";
import { useEffect } from "react";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
    
  const isSideNavOpen = useDrawer(nav => nav.isSideNavOpen)
  const setIsSideNavOpen = useDrawer(nav => nav.setIsSideNavOpen)
  const isSizeOk = useDrawer(nav => nav.isSizeOk)

  const setAllTasks = useStore(store => store.setAllTasks)
  

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn:  getTodos,
})
   
  useEffect(
    () => {
      setAllTasks(data)
    }
    ,[data])

  return (
    <ThemeProvider theme={darkTheme}>
    <>
      {isSideNavOpen && isSizeOk ? <div onClick={() => {setIsSideNavOpen(!isSideNavOpen)}} className="w-full h-full z-[70] fixed top-0 bottom-0 left-0 right-0 bg-black/70 transition-100 transition-colors"></div> : ""}
        <div
         className=" lg:ml-[286px] text-2xl mt-[70px] dark  ">
           <NavBar/>
          <SideDrawer/>
         <Outlet/>
        </div>
    </>
    </ThemeProvider>
  );
}
