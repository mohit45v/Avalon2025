import "./App.css";
import About from "./components/About";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import Galary from "./components/Galary";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Prize from "./components/Prize";
import Sponsers from "./components/Sponsers";
import video from "./components/bgvd.mp4";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Domains />
        <Prize />
        <Sponsers />
        <Galary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
