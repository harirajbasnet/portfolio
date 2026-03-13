
import Name from '../Insideintro/name'
import SML from '../Insideintro/socialMediaLink'
import Image from '../Insideintro/Image'
const intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between pt-5 ">

      <div className='w-full md:w-xl gap-7 py-3  flex flex-col justify-center items-center ' >
        <Name/>
        <SML/>
        </div>
        <div className='w-full md:w-fit '>
           <Image/>
           </div>
      
    </div>
  )
}

export default intro