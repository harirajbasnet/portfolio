const skillCard = ({img,Name} ) => {
  return (  
    <div className="border-2 flex-col justify-center justify-items-center gap-2">
 
            <img src={img} className="size-40"/>
            <h1 className="text-2xl">{Name}</h1>
  </div>
  )
}

export default skillCard