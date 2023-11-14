import React from 'react'
import GptSearchInput from './GptSearchInput'
import GptSuggestMovies from './GptSuggestMovies'
import { BG_IMAGE, BG_IMAGE2} from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {
  const langKey = useSelector(store=> store.config.lang)


  return (<>
    <div className='fixed -z-10'>
    {
  langKey === 'en' ? (
    <img className="h-screen object-cover md:w-screen" src={BG_IMAGE} alt="bg Pic" />
  ) : langKey === 'hindi' ? (
    <img className="h-screen object-cover md:w-screen" src={BG_IMAGE2} alt="bg Pic" />
  ) : null
}

  </div>

    <div>
     <GptSearchInput/>
    <GptSuggestMovies/>
    </div>
    </>
  )
}

export default GptSearch


