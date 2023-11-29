import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-600  w-full h-20'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md cursor-pointer'>
          <h2 className='text-blue-400'>Leo</h2><h2 className='text-green-500'>Rega!</h2>
        </div>
        <div className='text-white'>
            Leonardo Gabriel Regazzoni {"<Desarrollador Full Stack>"}
        </div>
        <nav className='text-blue-400 flex flex-col'>
          <a className='box-border hover:font-bold border-blue-400' href="#about">Sobre mi</a>
          <a className='box-border hover:font-bold border-blue-400' href="#projects">Proyectos</a>
          <a className='box-border hover:font-bold border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer