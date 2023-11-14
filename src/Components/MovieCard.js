import { Link } from 'react-router-dom';
import { IMG_CDN } from '../utils/constants'





const MovieCard = ({posterPath,movieId}) => {

 if(!posterPath) return null;

  return (
    <>
    <div className='md:w-72 w-40 md:h-72 h-40 pr-8 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110 '>
    <Link to= {`/moviesInfo/${movieId}`}>
      <img  className="rounded-lg" alt="Moviecard" src={IMG_CDN+posterPath}/>
    </Link>
    </div>
  </>
  )
}



export default MovieCard; 

























