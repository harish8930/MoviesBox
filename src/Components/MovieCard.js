import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-64 h-64  pr-8 '>
        <img  className="rounded-lg  hover:scale-110 transition-transform transform "alt="Moviecard" src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard