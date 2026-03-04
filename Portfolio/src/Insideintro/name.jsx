import { Typewriter } from 'react-simple-typewriter'
const Name= () => {
  return (

        
         <div className="flex flex-col text-4xl  py-3 font-sans font-semibold items-center gap-10  ">
                    <span className='w-fit'> HI, I am</span>
                    <div className='flex flex-col gap-3 items-center'>
                   <span className='border-2 bg-white p-3  '>
                      <Typewriter
                          words={['Hari Raj Basnet']}
                          loop={0} // 0 means infinite loop
                          cursor 
                          cursorStyle='|'
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                /></span>  {/*ma yaha react ko type writer vanne hooks use garxu yaha tyo yasari install  garna milxa npm install react-simple-typewriter */}
                    <span className='text-xl'>Frontend Developer</span>
                    </div>
                    </div>
  )
}

export default Name