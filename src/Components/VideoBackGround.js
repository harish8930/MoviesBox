import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const VideoBackGround = ({movieId}) => {
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)
    
     useMovieTrailer();

  return (
    <div>
<iframe 
className='w-screen aspect-video '
//src= {"https://www.youtube.com/embed/" +trailerVideo?.key+ '?&autoplay=1&mute=1' }
 title="YouTube video player" 
 allow="accelerometer;
  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowfullscreen>
   </iframe>
    </div>
  )
}

export default VideoBackGround;

/*
<iframe

className='w-screen aspect-video '
src={"https://www.youtube.com/embed/"+ trailerVideo?.key+ "?&autoplay=1&mute=1"}
title="YouTube video player" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowFullScreen></iframe>
*/