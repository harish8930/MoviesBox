import React from 'react'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoRocketSharp } from "react-icons/io5";

const NaviBar = () => {
  return (
    <div className='lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black rounded-full p-3 w-28 flex justify-between' >
     <Link to='/browse'><IoMdHome size={30}/></Link>
     <Link to='/gptSearch'><IoRocketSharp size={30}/></Link>
    </div>
  )
}

export default NaviBar