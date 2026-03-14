import { useEffect, useState } from "react";
import Movie from './movie.png'
import Builders from './builders.png'

const ProjectCard = () => {
   const projectName =[
        {   id:1,
            img:Builders,
            Name:"HIMALAYAN YETI ",
            Link:"https://himalayanyetibuilders.com.np/"

        },
         {
            id:2,
            img:Movie,
            Name:"MOVIE APP",
            Link:"https://hrbvision.vercel.app/"

        }
    ]
    const [Like, setLike] = useState(() => {
      const SaveLike =localStorage.getItem("LikedProject")
      return SaveLike? JSON.parse(SaveLike):[]
    }
    )
useEffect(() => {
localStorage.setItem("LikedProject",JSON.stringify(Like));
}, [Like])


  const toggleLike = (items) => {
  const isLike = Like.some((m) => m.id === items.id)
  if (isLike) {
    setLike(Like.filter((m) => m.id !== items.id));
  } else {
    setLike([...Like,items ])
  }
};
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
{projectName.map((items) => {  
  const isLike = Like.some((m) => m.id === items.id)
  return(
  <div className='w-2xs md:w-xs border-1 border-lime-400 pt-3  text-xl md:text-2xl justify-center items-center flex flex-col  gap-3 bg-zinc-300  rounded-xl mt-10 'key={items.id}>
        <img className='size-60 md:size-85 p-2 object-cover rounded-2xl' src={items.img}/>
        <h1 className='font-semibold font-serif p-2 '>{items.Name}</h1>
        <div className='flex justify-between bg-gray-700 p-3 w-full rounded-t-2xl'>
        <button onClick={() => toggleLike(items)} ><i className={`${isLike? "ri-heart-fill text-red-500 text-4xl" : "ri-heart-line text-white text-3xl"} text-2xl transition-all`}></i></button>
        < a href={items.Link} className='bg-red-600   justify-center flex hover:bg-green-600 rounded-2xl p-1 w-3/8'>Live</a>
        
    </div>
    </div>
  )
})}

    </div>
  )
}

export default ProjectCard