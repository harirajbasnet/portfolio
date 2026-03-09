import { useEffect, useState } from "react";

const ProjectCard = () => {
   const projectName =[
        {   id:1,
            img:"https://imgs.search.brave.com/0dAis_phGzbf0sxQeyBxWgO4eTlCnT-jJodAXGFvaD8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvaC85/MC9odG1sLTUuc3Zn",
            Name:"HTML"
        },
         {
            id:2,
            img:"https://imgs.search.brave.com/FtBhWtE5Hgb2LAtPwBLwh-3dOhv_jCe2vTrvx_o8JKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL3cz/X2Nzcy93M19jc3Mt/b2ZmaWNpYWwuc3Zn",
            Name:"CSS"
        },
         {  
            id:3,
            img:"https://imgs.search.brave.com/UvChWjUA87SCMgBLiF7zi2TmKEONRrlx4-7ddJ8OIyM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvamF2YXNj/cmlwdC1sb2dvLXBu/Z19zZWVrbG9nby0z/MzA1NDEucG5n",
            Name:"JS"
      },
        {   id:4,
            img:"https://imgs.search.brave.com/OT5gT0roTCQZJFP9Gi8zA8rlkyvgcw5jIHxznysUero/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzExMzc5NDYucG5n",
            Name:"C++"
        },
       {     id:5,
             img:"https://imgs.search.brave.com/b9Oy-hluarXHpdE2P6FWlfdCPOl9LPvHEUdbbmkvQSo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LXByb2dyYW1taW5n/LWxhbmd1YWdlLWxv/Z28ucG5n",
             Name:"C"
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
    <div className="grid-cols-3 grid gap-10 ">
{projectName.map((items) => {  
  const isLike = Like.some((m) => m.id === items.id)
  return(
  <div className='w-xs border-1 border-lime-400 shadow-olive-900 py-3 text-2xl justify-center items-center flex flex-col 'key={items.id}>
        <img className='size-75 p-2 rounded-b-2xl' src={items.img}/>
        <h1 className='font-semibold font-serif p-2'>this is the end</h1>
        <div className='flex justify-between bg-gray-700 p-3 w-full rounded-t-2xl'>
        <button onClick={() => toggleLike(items)} ><i className={`${isLike? "ri-heart-fill text-red-500" : "ri-heart-line text-white"} text-2xl transition-all`}></i></button>
        <button className='bg-red-600  hover:bg-green-600 rounded-2xl p-1 w-3/8'>Live</button>
    </div>
    </div>
  )
})}

    </div>
  )
}

export default ProjectCard