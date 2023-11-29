
import Home from "./components/home/Home";
import About from "./components/about/About"
import Projects from "./components/Projects/Projects";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import SocialBar from "./components/socialBar/SocialBar";

function App() {

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <NavBar/>
      <SocialBar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
