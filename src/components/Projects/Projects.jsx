import React from 'react'

const Projects = () => {

  const projectsJson = [
    {
      image: "https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png", 
      name: "Título del proyecto", 
      description: "Esta es la descripción del proyecto"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png", 
      name: "Título del proyecto", 
      description: "Esta es la descripción del proyecto"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png", 
      name: "Título del proyecto", 
      description: "Esta es la descripción del proyecto"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png", 
      name: "Título del proyecto", 
      description: "Esta es la descripción del proyecto"
    }
  ];

  return (
    <section id="projects" className='w-full min-h-screen flex justify-center pt-28 bg-slate-500'>
        <div className='w-4/5 flex flex-col items-center'>
            <h3 className='text-2xl font-bold mb-8'>Proyectos</h3>
            <div className='w-full flex flex-wrap justify-evenly'>
              {projectsJson.map((project) => (
                <div key={project.name} className='flex flex-col items-center w-1/4 h-96 ml-1 mr-1 mb-8 bg-slate-300 bg-opacity-30 shadow-md shadow-green-100'>
                  <img src={project?.image} alt={project?.name}/>
                  <h4 className='font-bold text-base mt-4 mb-4'>{project?.name}</h4>
                  <p className='font-semibold text-sm'>{project?.description}</p>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
}

export default Projects;