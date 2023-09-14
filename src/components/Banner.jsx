import { Info, Play } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import requests from './requests'
import axios from './axios'


function Banner() {

  const [movie, setMovie ] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals) ;

      setMovie(

        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );

      return requests;
    }

    fetchData();

  },[])
  
  console.log(movie)
  function trancate (string, n) {
    return string?.length > n? string.substr(0, n-1) + '...' : string;
  }

  return (

    <div>

        <header className= " w-full h-[899px]"  style={{

          backgroundImage: `linear-gradient(to bottom, transparent, rgba(37, 37, 37, 0.6), black),
              linear-gradient(to top, transparent, rgba(37, 37, 37, 0.6), bg-gray-800),
          url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'center top',
          backgroundSize:"cover"
          // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path")`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center center',
        }} >


         
      <div className=' absolute top-60 left-10 p-4 '>

          <h1 className='text-[3rem] text-white mb-2'>{movie?.name || movie?.title || movie?.original_name}</h1>

          <div className='flex flex-row gap-3'>

          <button className='flex  gap-5  font-medium bg-white pl-[2rem] pr-[2rem] text-black rounded-sm pt-[0.8rem] pb-[0.8rem] hover:bg-gray-300 hover:text-black duration-75 transition-none ease-in-out'>
            <Play  className='fill-black font-medium'/>
            Play</button>
          <button className='flex  gap-5  bg-[#464545] hover:bg-gray-700 pl-[2rem] pr-[2rem] text-white text-center rounded-sm pt-[0.8rem] pb-[0.8rem]  duration-75 transition-none ease-in-out'>
            <Info className=' ' />
            More Info</button>
          </div>

            <h1 className='h-[80px] mt-3 w-[45rem] max-w-[360px] leading-1.3 text-[1rem] text-white'>
        { trancate( movie?.overview, 150)}</h1>
            
            

        </div>

            {/* <div class="h-19 bg-gradient-to-b from-transparent via-rgba(37, 37, 37, 0.61) to-#111"></div> */}
            {/* <div className='absolute   bottom-16 left-0 w-full h-[7.4rem] bg-gradient-to-b from-transparent  to-black'></div> */}


        </header>
    </div>

     
      

        
        
  
  )
}

export default Banner