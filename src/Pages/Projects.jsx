import Project from '../ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div>
        <div className="h-[200px] flex items-center justify-center relative  ">
        <h1 className=" absolute bottom-0 border-2  p-5 w-xs justify-center flex text-4xl font-bold ">PROJECTS</h1>
      </div>
    <div className='flex justify-center my-5'>
       <Project/>
    </div>
    </div>
  )
}

export default Projects