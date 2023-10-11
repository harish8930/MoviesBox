
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesUpComing } from '../utils/moviesSlice'
import { useEffect } from 'react'



const useMoviesUpComing = () => {
const dispatch = useDispatch()
const  moviesUpComing= useSelector(store=> store.movies.moviesUpComing)
const getMoviesUpComing =  async ()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
const json =  await data.json();

dispatch(addMoviesUpComing(json.results));
}
useEffect(()=>{
  if(!moviesUpComing) 
  getMoviesUpComing();
},[])

}

export default useMoviesUpComing;