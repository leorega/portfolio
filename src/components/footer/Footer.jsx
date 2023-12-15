import React from 'react'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className='bg-slate-600  w-full h-20'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md cursor-pointer'>
        <Link to="home" smooth={true} duration={500} className="flex">
            <h2 translate='no' className='text-blue-400'>Leo</h2><h2 translate='no' className='text-green-500'>Rega!</h2>
          </Link>
        </div>
        <div className='text-white hidden md:block'>
            Leonardo Regazzoni {"<Desarrollador Full Stack>"}
        </div>
        <nav className='text-blue-400 flex flex-col lg:flex-row lg:w-1/4 justify-between'>
          <a className='box-border hover:font-bold border-blue-400' href="#about">Sobre mi</a>
          <a className='box-border hover:font-bold border-blue-400' href="#projects">Proyectos</a>
          <a className='box-border hover:font-bold border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer