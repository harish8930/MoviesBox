
import { IMG_CDN } from '../utils/constants'


const MovieCard = ({posterPath}) => {

 if(!posterPath) return null;
  return (
    <div className='md:w-64 w-40 md:h-64 h-40 pr-8 transform transition-transform hover:scale-110 '>
        <img  className="rounded-lg  "alt="Moviecard" src={IMG_CDN+posterPath} />
    </div>
  )
}

export default MovieCard;
//Hello 