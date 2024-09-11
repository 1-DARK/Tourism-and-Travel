"use client"
import React, { useState } from 'react'
import { AiOutlineAudio, AiOutlineSearch } from 'react-icons/ai'

const Header=()=> {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='w-full h-screen relative'>
      <video 
        className='w-full h-full object-cover'  
        src="https://videos.pexels.com/video-files/2096553/2096553-sd_640_360_30fps.mp4"  
        autoPlay 
        loop 
        muted
      />
      <div className='absolute inset-0 bg-gray-900/30'>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            First Class Travel
          </h1>
          <h2 className='text-xl md:text-2xl lg:text-3xl mb-8'>
            Top 1% Locations Worldwide
          </h2>
          <form 
            className='flex justify-between items-center max-w-[700px] w-full mx-auto p-2 rounded-full bg-white/90'
          >
            <input 
              className='flex-grow bg-transparent px-4 py-2 text-black placeholder-gray-500 focus:outline-none'
              type="text"
              placeholder="Talk with AI"
            />
            <div className='flex items-center'>
              <button
                type="submit"
                className='p-2 text-white-600'
              >
                <AiOutlineSearch size={24} />
                <span className="sr-only">Search</span>
              </button>
              <button
                type="button"
                className='ml-2 p-2 text-white-600'
              >
                <AiOutlineAudio size={24} />
                <span className="sr-only">Voice Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Header
