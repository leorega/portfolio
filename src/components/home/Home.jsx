
import NavBar from '../navBar/NavBar';
import About from '../about/About';

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <NavBar/>
      <h1 className="font-bold text-blue-400 text-4xl mb-4 [text-shadow:_0_1px_1px_rgb(0_0_0_)]">
        Leonardo Regazzoni (<i className='font-mono text-green-500 text-3xl'>LeoRega</i>)
      </h1>
      <h3 className="font-mono font-bold text-2xl">Desarrollador Web FullStack</h3>
      <About/>
    </div>
  )
}

export default Home;