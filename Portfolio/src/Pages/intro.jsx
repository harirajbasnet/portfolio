
import Name from '../Insideintro/name'
import SML from '../Insideintro/socialMediaLink'
import Image from '../Insideintro/Image'
const intro = () => {
  return (
    <div className="flex  justify-between  pt-5 ">

      <div className='w-xl gap-7 py-3  flex flex-col justify-center items-center ' >
        <Name/>
        <SML/>
        </div>
       <Image/>
    </div>
  )
}

export default intro