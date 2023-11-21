import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About"

function App() {

  return (
    <div className="flex justify-center bg-green-200">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
