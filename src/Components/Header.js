import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/fireBase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { cahngeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store=> store.user)
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
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

const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchView());
}

const handleLanguageChange=(e)=>{
dispatch(cahngeLanguage(e.target.value));
}
  return (
    <div className='absolute w-screen px-8 py-4  bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className ='w-48 h-20'src= {LOGO}alt='logo'/>

   {user && (
    <div className='p-1'>
      {showGptSearch &&
      <select className='p-2 bg-zinc-600 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
   
      </select>}
      <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-md mx-4 my-2' onClick={handleGptSearchClick}>
       {showGptSearch? "Homepage" : "GPT Search" }</button>
      <button className=   'bg-red-600 text-white p-1 rounded-md mt-3' onClick={handleSignOut}>Sign Out</button>
      {/*<img className='w-11 h-11 rounded-full ' alt='userIcon' src={user?.photoURL}/>*/}

    
    </div>
    )}
    </div>
 
  )
}

export default Header