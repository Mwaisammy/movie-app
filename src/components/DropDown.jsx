import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Links } from '../constast';
import { ArrowDown } from 'lucide-react';
import { ArrowUp } from 'lucide-react';



function DropDown() {

  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      
      
      <div className='flex flex-col h-[320px] w-[320px] items-center rounded-lg'>
        <button className='flex flex-col items-start w-[100px] tracking-wider p-4 justify-between rounded-lg text-white' onClick={() => setOpen(!isOpen)}>
          Browse
         {!isOpen ? <ArrowDown /> : <ArrowUp />}
        </button>
        {isOpen && <div className='flex flex-col
        top-20 items-start p-2 w-[250px] border-t-4 text-center text-gray-300
        bg-opacity-70 bg-black font-mono'>
          {Links.map((item) => (
            <div key={item.id} className='flex flex-col p-4 justify-center cursor-pointer
             w-full   hover:bg-gray-700/25'>
              <h1>{item.name}</h1>
            </div>
          ))}
          </div>}
      </div>
    </section>
  )
}

export default DropDown