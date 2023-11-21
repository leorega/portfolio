

const NavBar = () => {
  return (
    <div className='bg-slate-600  w-full h-20 flex items-center mb-8'>
      <div className='flex w-4/5 mx-auto justify-between items-center h-full'>
        <div className='flex font-black text-2xl'>
          <h3 className='text-blue-400'>Leo</h3><h3 className='text-green-500'>Rega!</h3>
        </div>
        <nav className='text-blue-400 w-1/4 flex justify-between h-full items-center'>
          <a className='hover:border-t-2 border-blue-400' href="./about">About Me</a>
          <a className='hover:border-t-2 border-blue-400' href="">Projects</a>
          <a className='hover:border-t-2 border-blue-400' href="">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;