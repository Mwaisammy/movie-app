import { Bell, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return ( 
   <header className='bg-black '>
    <div className='container mx-auto flex items-center '>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""  className='h-[80px] w-[100px] object-contain ml-10'/>

      

       <div className='ml-auto '>
       <Bell className='text-white'/>
       </div>
        <button className='ml-auto mr-40'>
    
        <Search className='text-white '/>
        </button>
      


       
      
    </div>
   </header>
  )
}

export default Header

