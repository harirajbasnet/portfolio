import { useState } from "react"
import Break from '../PageBreak/Break'

const About = () => {
    const [Expand, setExpand] = useState(false)
  return (
    <div className=' p-4 justify-center flex flex-col items-center  gap-10'>
       
      <div className="h-[200px] flex items-center justify-center relative ">
        <h1 className=" absolute bottom-0 border-2  p-5 w-xs justify-center flex text-4xl font-bold ">ABOUT ME</h1>
      </div>

      <div className=" w-3/4 py-5">
        <p className='text-justify ' >
            Namaste! It's me Hariraj Basnet from Nepal.Iam currently pursuing a degree in Computer science and Information Technology, where my academic journey has equipped me with a strong foundation in various aspects of IT.
            {
              Expand?(
                <span className="animate-fade-in">
                {" "}Concurrently,my burgeoning interest and expertise lie in the realm of frontend development.In the dynamic world of technology, I have immersed myself in the intricacies of HTML, CSS, and JavaScript, continually expanding my skill set to meet the evolving demands of modern web development. My approach to frontend development is not merely technical but deeply rooted in creativity and an acute attention to detail.Through hands-on projects and coursework, I have honed my ability to transform design concepts into seamless and interactive user interfaces. I take pride in crafting engaging and user-friendly experiences, always mindful of the delicate balance between aesthetics and functionality.My commitment to staying abreast of industry trends is evident in my exploration of frameworks such as React and Vue.js, which I seamlessly integrate into my development toolkit. This adaptability and eagerness to embrace new technologies reflect my dedication to being a versatile and forward-thinking frontend developer. .Beyond technical prowess, my experiences in collaborative projects have sharpened my communication and teamwork skills. I thrive in environments where diverse perspectives converge to create innovative solutions. As an IT student with a specialization in frontend development, I am not only equipped with technical acumen but also possess a holistic understanding of the broader IT landscape. I am enthusiastic about contributing my skills and insights to dynamic projects and am eager to embark on a journey where I can blend my academic knowledge with real-world application in the ever-evolving field of frontend development.
                </span>
              ):(
                "..."
              )
            } 
        </p>
        </div>
        <div className="w-full flex justify-center">
        <button 
        onClick={() => setExpand(!Expand)}
        className="mt-4 font-semibold flex items-center gap-2 text-2xl transition-all"
      >
        {Expand ? "Show Less" : "Explore"}
        <i className={Expand ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </button>
      </div>

   <Break/> 
      <div className="w-full flex flex-col items-center gap-20">

        <div className="flex gap-4 md:gap-50 mt-5 justify-center ">

          <div className=" h-[100px] border-2 w-xs">
            <h1>Design</h1>
          </div> 

      <div  className="w-xs h-[100px] border-2">
          <h1>Development</h1>
      </div>
    </div>

        <div className="w-xs h-[100px] border-2">
           <h1> Maintenance</h1>
        </div>
      </div>
      
    </div>
  )
}
export default About