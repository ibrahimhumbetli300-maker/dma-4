import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Location from "./components/location";
import Navbar from "./components/navbar";
import Pcontent from "./components/pcontent";
import Project from "./components/project";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Pcontent/>
    <Project/>
    <About/>
    <Contact/>
    <Location/>
    <Footer/>
    </>
  );
}

export default App
