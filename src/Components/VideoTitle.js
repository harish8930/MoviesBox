import React from 'react'
import image from '../utils/platbtn.png'
const VideoTitle = ({title,overview}) => {

  return (
    <div className=' w-screen  aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl  font-bold'  >{title}</h1>
        <p className='py-6 text-lg w-1/4' >{overview}</p>
        <div>
            <button className='bg-white text-black  p-4 px-12 text-xl rounded-lg hover:opacity-80 font-bold'>
           ▶ Play
              </button>
            <button className= 'bg-gray-500 mx-2  text-white p-4 px-12 text-xl rounded-lg opacity-50 font-bold'>More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle;