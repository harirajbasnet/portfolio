import React from 'react'

const Navbar = () => {
  return (
    <div className='p-3 flex justify-between border-2'>
        <div className='text-5xl font-bold bg-white flex w-xs justify-start p-4'>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
             &lt;
            </span>
            <span className="text-black font-serif p-1">H</span>
            <span className="text-red-600 group-hover:text-red-400 transition-colors">
            ./&gt;
           </span>
         </div>

         <div className='flex gap-5 py-5 px-3 text-xl justify-start font-semibold font-mono'>
             <a href="">About me</a>
             <a href="">Skills</a> 
              <a href="">Projects</a>    
              <a href="">CONTACT ME</a>
         </div>
    </div>
  )
}

export default Navbar