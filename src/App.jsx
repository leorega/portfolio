
import Home from "./components/home/Home";
import About from "./components/about/About"
import NavBar from "./components/navBar/NavBar";

function App() {

  return (
    <div className="flex-column justify-center bg-slate-500">
      <NavBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
