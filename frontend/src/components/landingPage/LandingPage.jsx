import { Link, Outlet } from "react-router-dom"
import logo from '../../components/assets/png/template.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@mui/material";
import checkMark from "../assets/png/checkMark.png";
import { useDrawer } from "../../store/todoState";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/getWindowDimensions";

export default function LandingPage(){
    const [isSizeOk , setIsSizeOk] = useState()
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        if(width <= 714.5) setIsSizeOk(true)
        else setIsSizeOk(false)
    },[width])

    return (<>

            <div  className="justify-between flex  items-center w-full m-0 p-1 bg-[#00000052] h-[55px]">
           { <NavBarItems/>}
            </div>

        <Outlet/>
        </>)
}

function NavBarItems() {

return (<>
    <Link className=" flex items-center mr-2 " to={'/'}><img className="w-10 ml-10" src={checkMark} alt="Logo" /><div className="ml-2 border-l-2 border-l-[#c2bfbf] px-2">AdhdList</div></Link>
     
    <div className=" flex items-center">
    <a className="hover:bg-slate-700 p-1 rounded-xl mr-5 transition-colors duration-200" href="https://www.upwork.com/freelancers/~01156fadf38622e666" target="_blank" >UpWork</a>
    <a className="hover:bg-slate-700 p-1 rounded-xl mr-5 transition-colors duration-200 " href="https://github.com/MERNomar/TodoList-react" target="_blank" ><GitHubIcon/></a>
    <div className="border-l-2 border-[#ffffff3a] pl-2 "><Button variant="text" color="primary">Login</Button></div>
    <div className="ml-3"><Button variant="contained"><Link to='todos/all'>Start now for free</Link></Button></div> 
    </div>
    </>
)}

