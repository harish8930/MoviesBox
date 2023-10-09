import React from 'react'
import GptSearchInput from './GptSearchInput'
import GptSuggestMovies from './GptSuggestMovies'
import { BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BG_IMAGE} alt="bg image"/>
      </div>
     <GptSearchInput/>
    <GptSuggestMovies/>
    </div>
  )
}

export default GptSearch


