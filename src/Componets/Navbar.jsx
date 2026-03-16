import React, { useContext, useState } from 'react'
import { ThemeData } from '../ThemeContext/Darkcontex'

const Navbar = () => {
const [IsOpen, setIsOpen] = useState(false)
const [theme,setTheme] = useContext(ThemeData)

const ChangeTheme =() => {
  setTheme('dark')
}
  return (
    <div className='flex justify-between border-2 bg-white h-[100px]'>
        <div className='text-5xl font-bold bg-white  flex w-xs justify-start p-4 items-center'>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
             &lt;
            </span>
            <span className="text-black font-serif p-1">H</span>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
            ./&gt;
           </span>
         </div>
          <div className="md:hidden text-2xl cursor-pointer justify-center flex  items-center" onClick={() => setIsOpen(!IsOpen)}>
          <i className={IsOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

         <div className={`
        ${IsOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto 
        bg-white md:bg-transparent gap-5 py-5 px-6 text-xl font-semibold font-mono border-b md:border-none  items-center
      `}>
             <a href="#about">About me</a>
             <a href="#skill">Skills</a> 
              <a href="#project">Projects</a>    
              <a href="#contact" className='bg-red-500 p-4 rounded-2xl hover:bg-white'>CONTACT ME</a>
              <button > text</button>

         </div>
               
    </div>
  )
}

export default Navbar