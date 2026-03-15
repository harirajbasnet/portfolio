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
            img:"https://imgs.search.brave.com/gLtUuF9fkSyZMSsl8qQPMgOAYK5LskYmz5RxWDA3XQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3NGRkMTIyMzM0/M2ZiYzIyMDdkMDAu/cG5n",
            Name:"REACT JS"
        },
       {
             img:"https://imgs.search.brave.com/b9Oy-hluarXHpdE2P6FWlfdCPOl9LPvHEUdbbmkvQSo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LXByb2dyYW1taW5n/LWxhbmd1YWdlLWxv/Z28ucG5n",
             Name:"C"
        },
        {
             img:"https://imgs.search.brave.com/g25Go0D2iqBwkBlvM0pwddYMcz47g67DgFTQtl2pnfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzIvc3FsLWxv/Z28tcG5nX3NlZWts/b2dvLTUwNTI0Ny5w/bmc",
             Name:"SQL"
        }

    ]

    const LearningSkill=[
        {
            img:"https://imgs.search.brave.com/CnhMVsaOcdNqG9yXJc6reDgL8mWiho0J_ka56dME2II/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby0yNzM3/NDkucG5n",
            Name:"NODE JS"
        },
         {
            img:"https://imgs.search.brave.com/Ph7-366GT3M-Fd9W_XBHntemxQzotjc5wnzgQ0W4VAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/bW9uZ29kYi5zdmc",
            Name:"MONGO DB"
        },
         {
            img:"https://imgs.search.brave.com/2-yx7Xwjfzq8g5UWhnV7IFUGjrx-Cvrw1Sz80ep_k5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMyMTE5Lmxv/Z293aWsuY29tLndl/YnA",
            Name:"EXPRESS JS"
      }
    ]

  return (
    <div className="p-2 md:p-4 justify-center flex flex-col items-center  gap-8 md:gap-15 " >
        <div className="h-[100px] md:h-[200px] flex items-center justify-center relative  ">
        <h1 className="absolute bottom-0 border-2  p-2 md:p-5 w-3xs md:w-xs justify-center flex text-xl md:text-4xl font-bold tracking-wide" >
          SKILL
        </h1>
        </div>
    <div className='justify-start flex w-full text-xl md:text-3xl tracking-widest '>
      <h1>USING NOW :</h1>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 w-full md:w-3/4 gap-5 md:gap-7 mt-2 md:mt-5'>   
   { SKILLNAME.map((index)=> (
     <div className='flex justify-center'>
        <SkillCard img={index.img} Name={index.Name}/>      
    </div>
    ))}
  </div> 
  <div className='justify-start flex w-full text-xl md:text-3xl tracking-widest '>
      <h1>LEARNING NOW :</h1>
    </div> 
  <div className='grid grid-cols-2 md:grid-cols-3 w-full md:w-3/4 gap-5 md:gap-7 mt-2 md:mt-5'>   
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