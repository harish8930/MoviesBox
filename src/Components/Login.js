import { useState } from "react"
import Header from "./Header"



const Login =()=>{
const[isSignInForm,setIsSignInForm] = useState(true)

const toggleSignin=()=>{

    setIsSignInForm(!isSignInForm);
}
return(
    <div>
    <Header/>
    <div className="absolute ">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="wall" />
    </div>

<form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
<h1 className="font-bold text-3xl py-4"> {isSignInForm ? 'Sign in' : 'Sign up'}</h1>
{!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-zinc-800 rounded-md"/>}
<input type="text" placeholder="Email or Phone Number" className="p-4 my-4 w-full bg-zinc-800 rounded-md"/>
<input type="text" placeholder="Password" className="p-4 my-4 w-full bg-zinc-800 rounded-md"/>
<button className="p-4 my-4  bg-red-600 w-full rounded-md">{isSignInForm ? 'Sign in' : 'Sign up'} </button>
<p className="py-4 cursor-pointer" onClick={toggleSignin}>{ isSignInForm ? "New To MoviesBox ? Sign up Now" : "Already registered ? Sign In Now " }</p>
</form>
    </div>
)
}


export default Login