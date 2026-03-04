import { useState } from "react"

const Subintro = () => {
  const [Expand, setExpand] = useState(false)
  return (
    <div className=' bg-black text-white p-4 rounded-b-3xl'>
        <p className='w-3/4 text-justify ' >
            Namaste! It's me Hariraj Basnet from Nepal.Iam currently pursuing a degree in Computer science and Information Technology, where my academic journey has equipped me with a strong foundation in various aspects of IT. Concurrently,my burgeoning interest and expertise lie in the realm of frontend development.In the dynamic world of technology, I have immersed myself in the intricacies of HTML, CSS, and JavaScript, continually expanding my skill set to meet the evolving demands of modern web development. My approach to frontend development is not merely technical but deeply rooted in creativity and an acute attention to detail.
            {
              Expand?(
                <span className="animate-fade-in">
                {" "}Through hands-on projects and coursework, I have honed my ability to transform design concepts into seamless and interactive user interfaces. I take pride in crafting engaging and user-friendly experiences, always mindful of the delicate balance between aesthetics and functionality.My commitment to staying abreast of industry trends is evident in my exploration of frameworks such as React and Vue.js, which I seamlessly integrate into my development toolkit. This adaptability and eagerness to embrace new technologies reflect my dedication to being a versatile and forward-thinking frontend developer. .Beyond technical prowess, my experiences in collaborative projects have sharpened my communication and teamwork skills. I thrive in environments where diverse perspectives converge to create innovative solutions. As an IT student with a specialization in frontend development, I am not only equipped with technical acumen but also possess a holistic understanding of the broader IT landscape. I am enthusiastic about contributing my skills and insights to dynamic projects and am eager to embark on a journey where I can blend my academic knowledge with real-world application in the ever-evolving field of frontend development.
                </span>
              ):(
                "..."
              )
            } 
        </p>
        <div className="w-full flex justify-center">
        <button 
        onClick={() => setExpand(!Expand)}
        className="mt-4 text-red-600 font-bold hover:underline flex items-center gap-1 transition-all"
      >
        {Expand ? "Show Less" : "Read More"}
        <i className={Expand ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </button>
      </div>
    </div>
  )
}

export default Subintro