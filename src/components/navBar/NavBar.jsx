import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {

  const [state, setState] = useState("hidden");

  return (
    <header className='bg-slate-600 lg:bg-opacity-70 w-full h-20 fixed top-0 z-10 flex items-center mb-8 shadow-lg'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md cursor-pointer'>
          <Link to="home" smooth={true} duration={500} className="flex">
            <h2 translate="no" className='text-blue-400'>Leo</h2><h2 translate="no" className='text-green-500'>Rega!</h2>
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={()=>(setState(state==='hidden' ? 'block' : 'hidden'))}>
            <GiHamburgerMenu className="text-2xl text-blue-400 active:text-green-500"/>
          </button>
        </div>
        <nav className={`${state} text-blue-400 bg-slate-600 w-1/2 flex flex-col fixed top-16 right-0 h-40 items-center justify-around rounded-bl-xl lg:flex lg:flex-row lg:static lg:bg-opacity-10 lg:h-full lg:rounded-none lg:w-1/4`}>
          <a onClick={()=>(setState(state==='hidden' ? 'block' : 'hidden'))} className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#about">Sobre mi</a>
          <a onClick={()=>(setState(state==='hidden' ? 'block' : 'hidden'))} className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#projects">Proyectos</a>
          <a onClick={()=>(setState(state==='hidden' ? 'block' : 'hidden'))} className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;