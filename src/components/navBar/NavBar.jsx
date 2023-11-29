import { Link } from "react-scroll";

const NavBar = () => {

  return (
    <header className='bg-slate-600  w-full h-20 fixed top-0 z-10 flex items-center mb-8 shadow-lg'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md cursor-pointer'>
          <Link to="home" smooth={true} duration={500} className="flex">
            <h2 className='text-blue-400'>Leo</h2><h2 className='text-green-500'>Rega!</h2>
          </Link>
        </div>
        <nav className='text-blue-400 w-1/4 flex justify-between h-full items-center'>
          <a className='pt-2 hover:border-t-2 hover:font-bold border-blue-400' href="#about">Sobre mi</a>
          <a className='pt-2 hover:border-t-2 hover:font-bold border-blue-400' href="#projects">Proyectos</a>
          <a className='pt-2 hover:border-t-2 hover:font-bold border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;