import Slider from "../slider/Slider";
import { MdCloudDownload } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Main = () => {
    return (
        <main
            id="home"
            className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-500 shadow-2xl"
        >
            <div className=" md:w-4/5 flex justify-center gap-4 items-center mb-20">
                <img
                    src="/images/Foto-perfil-sin-fondo.png"
                    alt="Leonardo Regazzoni"
                    className="w-32 h-32 md:w-60 md:h-60 -rotate-12 hover:rotate-0 transition-transform duration-500 ease-in-out border-2 border-green-500 rounded-full shadow-2xl"
                    title="Leonardo Regazzoni"
                    loading="lazy"
                />
                <div className="">
                    <h1 className="font-extrabold text-blue-400 text-4xl md:text-6xl mb-4 drop-shadow-xl border-b-[6px] pb-4 border-green-500">
                        Leonardo Regazzoni
                    </h1>
                    <h3 className="font-mono font-bold text-xl md:text-2xl">
                        Desarrollador Web FullStack
                    </h3>
                    <div className="mt-4 flex justify-center items-center">
                        <MdOutlineKeyboardDoubleArrowLeft className="text-2xl text-green-500" />
                        <a
                            href="./Leonardo Regazzoni CV.pdf"
                            title="Descargar CV"
                            download
                            className="flex flex-col items-center text-blue-400 font-bold text-xl mx-4 hover:text-green-500"
                        >
                            <MdCloudDownload className="mx-2 animate-bounce" />{" "}
                            CV
                        </a>
                        <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-green-500" />
                    </div>
                </div>
            </div>
            <Slider />
        </main>
    );
};

export default Main;
