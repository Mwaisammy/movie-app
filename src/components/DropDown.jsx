import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Links } from '../constast';

function DropDown() {

  const [isOpen, setOpen] = useState(true);
  return (
    <section>
      <div className='relative flex flex-col h-[320px] w-[320px] items-center rounded-lg'>
        <button className='flex flex-col items-start w-[100px] tracking-wider p-4 justify-between rounded-lg text-white' onClick={() => setOpen(!isOpen)}>
          Browse
         {!isOpen ? "up" : "down"}
        </button>
        {isOpen && <div className='flex flex-col  bg-slate-400 top-20 items-start p-2 w-full rounded-lg'>
          {Links.map((item) => (
            <div key={item.id} className='flex flex-col p-4 justify-center cursor-pointer w-full rounded-r-lg border-l-transparent border-l-4'>
              <h1>{item.name}</h1>
            </div>
          ))}
          </div>}
      </div>
    </section>
  )
}

export default DropDown