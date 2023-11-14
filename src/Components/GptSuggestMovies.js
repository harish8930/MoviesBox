import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestMovies = () => {
const {moviesResults,movieNames} = useSelector((store)=> store.gpt)


if(!movieNames) return null;

  return ( 
    <div className='p-4 m-4 bg-black text-white opacity-95'>
      <div>
{movieNames.map((movieName,index)=>(
<MovieList
key={movieName}
title = {movieName}
movies = {moviesResults[index]}
/>
))}

      </div>

    </div>
  )
}

export default GptSuggestMovies;