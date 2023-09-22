import React, { useEffect, useState } from 'react'
import axios from './axios';
// import { Carousel } from 'flowbite-react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonLoader from './Skeleton';



function Row({title, fetchUrl}) {

    const[movies, setMovies] = useState([]);
    const [ isLoading, setIsLoading ] =useState(true)
    const base_Url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{

     
         async function fetchData (){
            const request = await axios.get(fetchUrl);

            // console.log(request.data.result)
            setMovies(request.data.results)
            setTimeout(() => {

              setIsLoading(false)
            }, 2000)

         } 
         
         fetchData()
    },[])

    console.log(movies)

  return (

    <>

  

    <div className='relative bottom-80 space-x-12'> 

    {/* <h1>Hello World</h1> */}
 
      <h1 className=' text-xl text-white ml-12 font-semibold mb-1 '>
        {isLoading? ( <div className=''>
          <SkeletonTheme baseColor='#1c1c1c' highlightColor='#313131'>

        <Skeleton width={80} height={20} />
          </SkeletonTheme>
      </div>) : (title) }</h1>

    

     

         {isLoading? (
        <div className='flex space-x-2 overflow-x-scroll scrollbar-hide mb-8'>
        { movies.map((movie) =>(
              <SkeletonLoader
              key={movie.id}
             
              
              />
            ))}
          </div>
         ) : (


      <div className='flex space-x-2  overflow-x-scroll scrollbar-hide mb-14'>



        { movies.map((movie) => (
     
            <img 
            key={movie.id}

            src={`${base_Url}${movie.backdrop_path}`}
            alt={movie.name} 
            className='h-[120px] w-full rounded-[3px] object-contain'/>
          
            
        ))
          
        //  console.log(movie.poster_path)  
      }
      
       
     
    
      </div> 
        )}



        

    </div>

    
    </>
  )
}

export default Row 




{/* {isLoading ? (
  <div className='flex space-x-2  overflow-x-scroll scrollbar-hide mb-14'>
    {[...Array(10)].map((_, index) => (
      <Skeleton
        key={index}
        width={200}
        height={150}
        style={{ marginRight: '8px' }}
      />
    ))}
  </div>
) : (
  <div className='flex space-x-2  overflow-x-scroll scrollbar-hide mb-14'>
    {movies.map((movie) => (
      <img
        key={movie.id}
        src={`${base_Url}${movie.backdrop_path}`}
        alt={movie.name}
        className='h-[150px] w-full rounded-[3px] object-contain'
      />
    ))}
  </div>
)}
</div>

</>)}

export default Row








 */}

















