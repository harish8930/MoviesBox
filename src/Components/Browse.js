
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useMoviesUpComing from '../Hooks/useMoviesUpComing';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useMoviesUpComing();


  return (
    <div >
<Header/>
{
  showGptSearch? <GptSearch/> : <>
  <MainContainer/>
<SecondaryContainer/>
  </>
}


    </div>
  )
}

export default Browse