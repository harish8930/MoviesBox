import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import GptSearch from "./GptSearch";





const Body = () =>{

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
    path:'/browse',
    element: <Browse/>
    },

    {
        path:'/moviesInfo/:movieId',
        element: <MovieInfo/>
        },
{
    path:'/gptSearch',
    element: <GptSearch/>
}

    ])
return(
<>
    <RouterProvider router={appRouter} />
</>
)
}

export default Body; 
















