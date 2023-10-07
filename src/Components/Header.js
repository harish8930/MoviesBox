import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/fireBase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user)
  const handleSignOut =()=>{
    signOut(auth)
    .then(()=>{
navigate('/');
    })
    .catch((error)=>{
navigate('/error')
    })
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className ='w-44'src='
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>

   {user && (
    <div className=' p-1'>
      <img className='w-11 h-11 rounded-full ' alt='userIcon' src={user?.photoURL}/>
      <button className=   'bg-red-600 text-white p-1 rounded-md mt-3' onClick={handleSignOut}>Sign Out</button>
    </div>
    )}
    </div>
 
  )
}

export default Header