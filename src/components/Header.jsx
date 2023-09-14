import { Avatar } from '@mui/material'
import { Bell,  Search } from 'lucide-react'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'

function Header() {

  const [ smallScreen, setSmallScreen ] = useState(false)

  const handleSizeChange = () => {
    if(window.innerWidth <= 900){
      setSmallScreen(true)
    }else{
      setSmallScreen(false)
    }
  };

  useEffect(() => {
window.addEventListener('resize',handleSizeChange)


  },[]);

const [ show, setShow ] = useState(false)

const handleScrollHeader = () => {
  if(window.scrollY > 50){
    setShow(true);
  }else{
    setShow(false)
  }
};

useState(() => {
  window.addEventListener("scroll", handleScrollHeader);

  return () => {
    window.removeEventListener("scroll", handleScrollHeader)
  }
},[])

  

 
  return ( 
   <header className= {`fixed z-50 w-full transition-all duration-300 ease-in-out  ${show && "bg-black "}`}>
   
    <div className=' container max-auto flex items-center  '>
      <div >
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""  className='h-[60px] w-[80px] object-contain ml-14 '/>

      </div>

      {smallScreen ? (
        <DropDown/>
      ) : (

      <div className='flex text-white gap-5 items-center ml-10 md:pl-30 md:text-[15px]'>
        <Link to="/" className='font-bold '>Home</Link>
        <Link to="/"className='hover:text-gray-400'>TV Shows</Link>
        <Link to="/"className='hover:text-gray-400'>Movies</Link>
        <Link to="/"className='hover:text-gray-400'>New & Popular</Link>
        <Link to="/"className='hover:text-gray-400'>My List</Link>
        <Link to="/"className='hover:text-gray-400'>Browse by languages</Link>
      </div>
      )}


      
  

       <div className='ml-auto flex justify-around gap-7 items-center mr-11 md:ml-auto'>

        
       <div className='cursor-pointer'>
       <Search className='text-white -mt-1'/>
       </div>
        <div className='cursor-pointer '>
        <Bell className='text-white -m-3'/>
        </div>
       

       <div className='cursor-pointer mr-10'>
        <Avatar variant='rounded'/>
       </div>
      

    </div>
      


       
      
    </div>
   </header>
  )
}

export default Header



