import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {

  return (
    <header className='bg-slate-600 lg:bg-opacity-70 w-full h-20 fixed top-0 z-10 flex items-center mb-8 shadow-lg'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md cursor-pointer'>
          <Link to="home" smooth={true} duration={500} className="flex">
            <h2 className='text-blue-400'>Leo</h2><h2 className='text-green-500'>Rega!</h2>
          </Link>
        </div>
        <div className="lg:hidden w-1/4 h-1/2 flex items-center">
          <button className="w-full h-full flex justify-end items-center">
            <GiHamburgerMenu className="text-blue-400 w-1/2 h-1/2"/>
          </button>
        </div>
        <nav className='text-blue-400 bg-slate-600 w-1/2 flex flex-col fixed top-16 right-0 h-40 items-center justify-around rounded-bl-xl 
          lg:flex-row lg:static lg:bg-opacity-10 lg:h-full lg:rounded-none lg:w-1/4'>
          <a className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#about">Sobre mi</a>
          <a className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#projects">Proyectos</a>
          <a className='pt-2 lg:hover:border-t-2 hover:font-bold duration-150 border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;