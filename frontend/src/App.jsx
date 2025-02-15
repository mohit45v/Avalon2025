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
import RegistrationForm from "./components/RegistrationForm";
import Timeline from "./components/Timeline";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        
        <Route path="*" element = {<h1>404 Not Found</h1>} />
        <Route path="/confidential" element={<AdminLogin />} />
        
      </Routes>
    <div className="relative w-full  overflow-hidden">
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
      {/* <div className="relative z-10">
        <Navbar />
        <RegistrationForm />
        <Domains />       
        <Timeline />
        <About />
        <Dashboard />
        <Prize />
        <Sponsers />
        <Galary />
        <Footer />
        
      </div> */}
    </div>
    </Router>
  );
}

export default App;
