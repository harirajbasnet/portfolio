import SkillCard from '../skillCard/skillCard'
import Break from '../PageBreak/Break'
const Skill = () => {
    const SKILLNAME =[
        {
            img:"https://imgs.search.brave.com/0dAis_phGzbf0sxQeyBxWgO4eTlCnT-jJodAXGFvaD8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvaC85/MC9odG1sLTUuc3Zn",
            Name:"HTML"
        },
         {
            img:"https://imgs.search.brave.com/FtBhWtE5Hgb2LAtPwBLwh-3dOhv_jCe2vTrvx_o8JKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL3cz/X2Nzcy93M19jc3Mt/b2ZmaWNpYWwuc3Zn",
            Name:"CSS"
        },
         {
            img:"https://imgs.search.brave.com/UvChWjUA87SCMgBLiF7zi2TmKEONRrlx4-7ddJ8OIyM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvamF2YXNj/cmlwdC1sb2dvLXBu/Z19zZWVrbG9nby0z/MzA1NDEucG5n",
            Name:"JS"
      },
        {
            img:"https://imgs.search.brave.com/OT5gT0roTCQZJFP9Gi8zA8rlkyvgcw5jIHxznysUero/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzExMzc5NDYucG5n",
            Name:"C++"
        },
       {
             img:"https://imgs.search.brave.com/b9Oy-hluarXHpdE2P6FWlfdCPOl9LPvHEUdbbmkvQSo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LXByb2dyYW1taW5n/LWxhbmd1YWdlLWxv/Z28ucG5n",
             Name:"C"
        }
    ]

    const LearningSkill=[
        {
            img:"https://imgs.search.brave.com/0dAis_phGzbf0sxQeyBxWgO4eTlCnT-jJodAXGFvaD8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvaC85/MC9odG1sLTUuc3Zn",
            Name:"HTML"
        },
         {
            img:"https://imgs.search.brave.com/FtBhWtE5Hgb2LAtPwBLwh-3dOhv_jCe2vTrvx_o8JKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL3cz/X2Nzcy93M19jc3Mt/b2ZmaWNpYWwuc3Zn",
            Name:"CSS"
        },
         {
            img:"https://imgs.search.brave.com/UvChWjUA87SCMgBLiF7zi2TmKEONRrlx4-7ddJ8OIyM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvamF2YXNj/cmlwdC1sb2dvLXBu/Z19zZWVrbG9nby0z/MzA1NDEucG5n",
            Name:"JS"
      },
        {
            img:"https://imgs.search.brave.com/OT5gT0roTCQZJFP9Gi8zA8rlkyvgcw5jIHxznysUero/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzExMzc5NDYucG5n",
            Name:"C++"
        },
       {
             img:"https://imgs.search.brave.com/b9Oy-hluarXHpdE2P6FWlfdCPOl9LPvHEUdbbmkvQSo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LXByb2dyYW1taW5n/LWxhbmd1YWdlLWxv/Z28ucG5n",
             Name:"C"
        }
    ]

  return (
    <div className="p-4 justify-center flex flex-col items-center  gap-10" >
        <div className="h-[200px] flex items-center justify-center relative  ">
        <h1 className="absolute bottom-0 border-2  p-5 w-xs justify-center flex text-4xl font-bold tracking-wide" >
          SKILL
        </h1>
        </div>

    <div className='grid grid-cols-3 w-3/4 gap-7'>   
   { SKILLNAME.map((index)=> (
     <div key={index} className='flex justify-center'>
        <SkillCard img={index.img} Name={index.Name}/>      
    </div>
    ))}
  </div>  
  <div className='grid grid-cols-3 w-3/4 gap-7'>   
   { LearningSkill.map((index)=> (
     <div key={index} className='flex justify-center'>
        <SkillCard img={index.img} Name={index.Name}/>      
    </div>
    ))}
  </div>  
    </div>
  )
}

export default Skill