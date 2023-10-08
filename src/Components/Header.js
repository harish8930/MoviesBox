import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/fireBase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=> store.user)
  const handleSignOut =()=>{
    signOut(auth)
    .then(()=>{
    })
    .catch((error)=>{
navigate('/error')
    })
  }
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user)=>{
        if(user){
            const {uid,displayName,email,photoURL} = user;
            dispatch(
            addUser({
            uid : uid,
            displayName : displayName ,
            email: email,
            photoURL: photoURL,
            })
            )
            navigate("/browse")
        }else{
    dispatch(removeUser());
    navigate('/')
        }
    })
    // unsubscribe when component unmount ;
    return ()=> unsubscribe();
    },[])


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className ='w-48'src= {LOGO}alt='logo'/>

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