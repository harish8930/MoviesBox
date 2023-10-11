import React from 'react'
import GptSearchInput from './GptSearchInput'
import GptSuggestMovies from './GptSuggestMovies'
import { BG_IMAGE} from '../utils/constants'

const GptSearch = () => {
  return (<>
    <div className='fixed -z-10'>
    <img  className ="h-screen object-cover md: w-screen" src={BG_IMAGE} alt="bg Pic"/>
  </div>

    <div>
     <GptSearchInput/>
    <GptSuggestMovies/>
    </div>
    </>
  )
}

export default GptSearch


