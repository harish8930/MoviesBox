import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import NaviBar from "./NaviBar";

const MovieInfo=()=>{
const{movieId} = useParams();
const[movies,setMovies] = useState(null);
const[video,setVideo] = useState(null);

useEffect(()=>{
  fetchMovieInfo();
  fectchMoviesVideos();
},[])
const fetchMovieInfo = async()=>{
  try{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json =  await data.json();
  setMovies(json);
  }catch(error){
    console.log(error);
  }
}
   const fectchMoviesVideos = async()=>{
  try{
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
    )
    const json = await data.json()
    const filterData = json.results.filter(
      (video)=>
      video.type === "Trailer" || 
      video.type === "official Trailer" || 
      video.type === "Teaser" || 
      video.type === "Featurette" || 
      video.type.toLowerCase().includes("trailer")
    );
    console.log(filterData)
    setVideo(json.results[0]);
  }catch(error){
    console.log(error);
  }
}
return(
<>
<div className="w-screen aspect-video  ">
<iframe
 className=''
width='100%'
height='100%'
src={"https://www.youtube.com/embed/" + video?.key + "?autoplay=1&mute=1"} //
title='YouTube video player'
allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
allowFullscreen></iframe>
</div>
<div className='absolute block top-[30px] h-[100%] w-screen bg-gradient-to-r from-black '>
  <div className='text-white absolute ml-4 md:ml-14 top-[250px] md:top-[200px] lg:top-[250px]'>
    <h1 className='md:font-semibold font-bold text-5xl md:text-6xl lg:text-7xl'>{movies?.title}</h1>
    <p className='sm:w-full lg:w-[40%] text-lg'>{movies?.overview}</p>
    <p className="mt-2 text-lg text-white">⭐{Math.round(movies?.vote_average)}</p>
    <div className='flex ml-[-15px] mt-6'>
      {movies?.genres?.map((genre) => (
        <p
          key={genre?.id}
          className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-white'>
          {genre?.name}
        </p>
      ))}
    </div>
    <NaviBar/>
  </div>
</div>

  </>
)
}

export default MovieInfo;




















