import { Info, Play } from 'lucide-react'
import React from 'react'

function Banner() {
  return (
    
        <div>


        <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" className="object-cover w-screen"alt="banner" />
         
      <div className='absolute top-40 left-4 p-4'>

          <h1 className='text-[3rem] text-white mb-2'>Movie Name</h1>

          <div className='flex flex-row gap-3'>

          <button className='flex  gap-2  bg-white pl-[2rem] pr-[2rem] text-black rounded-sm pt-[0.8rem] pb-[0.8rem] hover:bg-gray-300 hover:text-black duration-75 transition-none ease-in-out'>
            <Play  className='fill-black font-medium'/>
            Play</button>
          <button className='flex  gap-2 bg-[#464545] hover:bg-gray-800 pl-[2rem] pr-[2rem] text-white rounded-sm pt-[0.8rem] pb-[0.8rem]  duration-75 transition-none ease-in-out'>
            <Info/>
            More Info</button>
          </div>

            <h1 className='h-[80px] w-[45rem] max-w-[360px] leading-1.3 text-[1rem] text-white'>This is a test description</h1>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-[7.4rem] bg-gradient-to-b from-transparent rgba(37,37,37) to-black'>

        </div>

     
      

        </div>
  
  )
}

export default Banner