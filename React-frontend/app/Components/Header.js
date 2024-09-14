import React from 'react'
import { AiOutlineSearch, AiOutlineMicrophone } from 'react-icons/ai'

const Header=()=> {
  return (
    <div className='w-full h-screen relative'>
      <video 
        className='w-full h-full object-cover'  
        src="https://videos.pexels.com/video-files/2096553/2096553-sd_640_360_30fps.mp4"  
        autoPlay 
        loop 
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-2'>
            First Class Travel
          </h1>
          <h2 className='text-xl md:text-2xl mb-8'>
            Top 1% Locations Worldwide
          </h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/100'>
            <input 
              className='bg-transparent w-full focus:outline-none px-2' 
              type="text" 
              placeholder="Talk with AI"
            />
            <div className='flex items-center space-x-2'>
              <button 
                type="button"
                aria-label="Voice input"
                className='p-2 text-gray-600 hover:text-gray-800 transition-colors'
              >
                <AiOutlineMicrophone size={20} />
              </button>
              <button 
                type="submit"
                aria-label="Search"
                className='bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors'
              >
                <AiOutlineSearch size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Header
