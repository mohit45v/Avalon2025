import "./App.css";
import About from "./components/About";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import Galary from "./components/Galary";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Sponsers from "./components/Sponsers";
import Timeline from "./components/Timeline";
import TechBoxes from "./components/Techboxes";
import Prizes from "./components/Prize";


function App() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-black">

      <Navbar />
      <Home />
     <TechBoxes/>
      <About />
      <Domains />
      <Timeline />
      <Prizes/>
      <Sponsers />
      <Galary />
      <Footer />
    </div>
  );
}

export default App;
