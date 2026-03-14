const skillCard = ({img,Name} ) => {
  return (  
    <div className="border-none flex flex-col justify-center  items-center gap-3 ">
 
            <img src={img} className="size-20 md:size-40"/>
            <h1 className="text-xl md:text-2xl font-bold">{Name}</h1>
  </div>
  )
}

export default skillCard