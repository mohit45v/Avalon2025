import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import logo from "./logo.png";
import TechBoxes from "./Techboxes";
import About from "./About";
import Domains from "./Domains";
import Timeline from "./Timeline";
import Prizes from "./Prize";
import Sponsers from "./Sponsers";
import Galary from "./Galary";
import Footer from "./Footer";
import Navbar from "./navbar";
import Contact from "./Contact";

import { Link } from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.floor(Math.random() * 10);
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [loading]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  // Replace multiple messages with one cool tech message
  const loadingMessage = "Compiling future, please wait...";
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#030014] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px] opacity-10 animate-grid-flow" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
        </div>
        
        <motion.div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 blur-2xl bg-purple-500/30 rounded-full animate-pulse" />
            <img
              src={logo}
              alt="Avalon Logo"
              className="h-32 py-4 w-auto relative drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            />
          </motion.div>
  
          <div className="relative w-64 mb-6">
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                {progress}%
              </span>
            </motion.div>
  
            <div className="h-1 w-full bg-purple-900/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
  
          <p className="text-gray-400 text-lg font-mono">
            {loadingMessage}
            <span className="animate-pulse">...</span>
          </p>
        </motion.div>
      </div>
    );
  }
  
    
  
    

  return (
    <>
      <Navbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-[#030014] overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014]" />
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-[3] flex flex-col items-center px-4 pt-16 sm:pt-20 text-center w-full max-w-6xl">
          {/* Logo with enhanced effects */}
          <motion.div
            className="relative h-24 w-40 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 blur-3xl bg-purple-500/30 rounded-full animate-pulse" />
            <img 
              src={logo} 
              alt="TechFest Logo" 
              className="relative h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(147,51,234,0.5)]" 
            />
          </motion.div>

          {/* Main Title with enhanced styling */}
          <motion.h1
            className="font-['Orbitron'] text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              AVALON 2025
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Technology Meets Innovation
          </motion.p>

          {/* Type Animation with enhanced container */}
          <motion.div
            className="mb-12 px-4 py-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "Explore the Digital Frontier",
                1000,
                "Shape the Future",
                1000,
                "Join the Tech Revolution",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 text-2xl sm:text-4xl lg:text-5xl font-bold font-mono"
            />
          </motion.div>{/* Type Animation container ends */}
          {/* CTA Button */}
          {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 items-center mb-24"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-6 py-4 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white text-md font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Know More
                  </Link>
                  <RouterLink
                    to="/register"
                    className="px-6 py-4 border border-purple-500/50 rounded-full text-white text-md font-medium hover:bg-purple-500/10 transition-all cursor-pointer"
                  >
                    Register Now
                  </RouterLink>
                </motion.div>
          {/* Tech Keywords with enhanced styling */}
          <motion.div
            className="absolute bottom-4 left-0 right-0 px-4" // Adjusted bottom spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['AI', 'Blockchain', 'IoT', 'Cloud', 'ML', 'Web3'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-full border border-purple-500/30 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-500/5"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div id="techboxes">
        <TechBoxes/>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="domains">
        <Domains />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="prizes">
        <Prizes/>
      </div>
      <div id="sponsors">
        <Sponsers />
      </div>
      <Footer />
      <div id="contact" className="w-full">
        <Contact />
      </div>

    </>
  );
};

export default Home;