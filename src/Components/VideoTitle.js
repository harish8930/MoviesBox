import React from 'react'
import image from '../utils/playicon.png'
const VideoTitle = ({title,overview}) => {

  return (
    <div className=' w-screen  aspect-video pt-[13%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl  font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div>

            <button className='bg-white text-black p-1  px-3 mt-3 md:py-4 md:px-10 text-xl rounded-lg hover:opacity-80 font-bold'>
              <div className='flex items-center justify-center'>
              <img className ='w-4 h-4'src={image} alt='playbtn '/>
                <p className='ml-1 text-xs md:text-xl '>Play</p>
              </div>
          
              </button>
            <button className= 'hidden md:inline-block bg-gray-500 mx-2 text-white p-[17px] px-10 text-xl rounded-lg opacity-50 font-bold'> More Info </button>
        </div>
    </div>
  )
}


export default VideoTitle;