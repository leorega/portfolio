

const NavBar = () => {
  return (
    <header className='bg-slate-600  w-full h-20 flex items-center mb-8'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-3xl drop-shadow-md'>
          <h3 className='text-blue-400'>Leo</h3><h3 className='text-green-500'>Rega!</h3>
        </div>
        <nav className='text-blue-400 w-1/4 flex justify-between h-full items-center'>
          <a className='hover:border-t-2 hover:font-bold border-blue-400' href="#about">Sobre mi</a>
          <a className='hover:border-t-2 hover:font-bold border-blue-400' href="#projects">Proyectos</a>
          <a className='hover:border-t-2 hover:font-bold border-blue-400' href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;