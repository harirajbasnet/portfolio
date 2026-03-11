import React, { useState } from 'react'

const Navbar = () => {
const [IsOpen, setIsOpen] = useState(false)
  return (
    <div className='p-3 flex justify-between border-2 '>
        <div className='text-5xl font-bold bg-white  flex w-xs justify-start p-4'>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
             &lt;
            </span>
            <span className="text-black font-serif p-1">H</span>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
            ./&gt;
           </span>
         </div>
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!IsOpen)}>
          <i className={IsOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

         <div className={`
        ${IsOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto 
        bg-white md:bg-transparent gap-5 py-5 px-6 text-xl font-semibold font-mono border-b md:border-none
      `}>
             <a href="#about">About me</a>
             <a href="#skill">Skills</a> 
              <a href="#project">Projects</a>    
              <a href="#contact">CONTACT ME</a>
         </div>
               
    </div>
  )
}

export default Navbar