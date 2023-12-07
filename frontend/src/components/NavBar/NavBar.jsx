import React, { useEffect } from 'react'
import { useDrawer } from '../../store/todoState'
import useWindowDimensions from '../../hooks/getWindowDimensions'
import { Dehaze , Person , GitHub , Brightness4} from '@mui/icons-material'
import { IconButton } from '@mui/material'


export default function NavBar() {
    const isSizeOk = useDrawer(nav => nav.isSizeOk)
    const setIsSizeOk = useDrawer(nav => nav.setIsSizeOk)
    const isSideNavOpen = useDrawer(nav => nav.isSideNavOpen)
    const setIsSideNavOpen = useDrawer(nav => nav.setIsSideNavOpen)

    const { height, width } = useWindowDimensions();
    useEffect(() => {
        if(width <= 1024) setIsSizeOk(true)
        else setIsSizeOk(false)
    },[width])


  return (
    <nav className=" w-full justify-between  lg:w-[calc(100%-18rem)] flex items-center h-[60px] border-b-[1px] fixed top-0 z-50   NavBar m-0 right-0 border-[#ffffff3d] bg-[#23272f]  stroke-neutral-950 rounded-sm  ">
       {/* { isSizeOk ? <p>true</p> : <p>false</p>}
       { isSizeOk ? <Link to={'/'} className='w-10'><img src={checkmark} alt="checkmark" /></Link> : null} */}
       <div>{isSizeOk ? <div className='ml-5 rounded-full  bg-[#36353554]'><IconButton  onClick={() => {setIsSideNavOpen(!isSideNavOpen)}}><Dehaze/></IconButton></div> : null}</div>
       <div className='flex'>
      <a target='_blank' href='https://github.com/MERNomar/TodoList-react/' className='mr-5 rounded-full  bg-[#36353554]'><IconButton><GitHub color='primary'/></IconButton></a>
       <div className='mr-5 rounded-full bg-[#36353554]'><IconButton><Brightness4  color='primary'/></IconButton></div>
      <div className='mr-5 rounded-full bg-[#36353554]'><IconButton><Person  color='primary'/></IconButton></div>
      </div>

    </nav>
  )
}
