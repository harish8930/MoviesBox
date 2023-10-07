import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/fireBase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const Body = () =>{
const dispatch = useDispatch();
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
    path:'/browse',
    element: <Browse/>
    },
    ])

useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
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
        }else{
    dispatch(removeUser());
        }
    })
    },[])



return(
<>
    <RouterProvider router={appRouter} />
</>
)
}

export default Body; 
















