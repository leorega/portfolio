import Slider from "../slider/Slider";
import { MdCloudDownload } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Main = () => {
  return (
    <main id="home" className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-500 shadow-2xl">
      <div className=" md:w-4/5 flex flex-col items-center mb-32">
        <h1 className="font-extrabold text-blue-400 text-4xl md:text-6xl mb-4 drop-shadow-xl border-b-[6px] pb-4 border-green-500">
        Leonardo Regazzoni
        </h1>
        <h3 className="font-mono font-bold text-xl md:text-2xl">Desarrollador Web FullStack</h3>
        <div className="mt-4 flex justify-center items-center">
          <MdOutlineKeyboardDoubleArrowLeft className="text-2xl text-green-500" />
          <a href="./CV Leonardo Regazzoni.pdf" download className="flex flex-col items-center text-blue-400 font-bold text-xl mx-4 hover:text-green-500">
            <MdCloudDownload className="mx-2 animate-bounce"/> CV
          </a>
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-green-500" />
        </div>
      </div>
      <Slider/>
    </main>
  )
}

export default Main;