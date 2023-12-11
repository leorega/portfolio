import Slider from "../slider/Slider";
import NavBar from "../navBar/NavBar";

const Main = () => {
  return (
    <main id="home" className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-500 shadow-2xl">
      <div className="w-4/5 flex flex-col items-center mb-32">
        <h1 className="font-extrabold text-blue-400 text-5xl md:text-6xl mb-4 drop-shadow-2xl border-b-[6px] pb-4 border-green-500">
        Leonardo Regazzoni
        </h1>
        <h3 className="font-mono font-bold text-2xl">Desarrollador Web FullStack</h3>
      </div>
      <Slider/>
    </main>
  )
}

export default Main;