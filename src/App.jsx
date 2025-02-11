import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import SocialBar from "./components/socialBar/SocialBar";
import Form from "./components/form/Form";

function App() {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <NavBar />
            <SocialBar />
            <Main />
            <About />
            <Projects />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
