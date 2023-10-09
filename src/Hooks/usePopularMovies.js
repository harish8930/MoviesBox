
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'



const usePopularMovies = () => {
const dispatch = useDispatch()
const getPopularMovies =  async ()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
const json =  await data.json();
console.log("result",json.results);
dispatch(addPopularMovies(json.results));
}
useEffect(()=>{
  getPopularMovies();
},[])

}

export default usePopularMovies;