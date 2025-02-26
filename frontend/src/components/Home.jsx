import * as React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation"; // Better typing library
import { motion } from "framer-motion"; // For smooth animations
import { Progress } from "@/components/ui/progress";
import logo from "./logo.png"; // Assuming logo is in assets folder
import TechBoxes from "./Techboxes";
import About from "./About";
import Domains from "./Domains";
import Timeline from "./Timeline";
import Prizes from "./Prize";
import Sponsers from "./Sponsers";
import Galary from "./Galary";
import Footer from "./Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
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

  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <motion.img
          src={logo}
          alt="TechFest Logo"
          className="h-24 w-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Progress value={progress} className="w-64 mb-4" />
        <p className="text-white text-sm">Loading experience... {progress}%</p>
      </div>
    );
  }

  return (
    <>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-950 overflow-hidden">
      {/* 3D Robot Animation - positioned as background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-d5e503f9b1f0c60091f2def7ac1c4b3a/"
          frameBorder="0"
          width="100%"
          height="100%"
          loading="lazy"
          title="Interactive Robot"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 bg-[url('/particles.svg')] opacity-30 animate-pulse" />

      {/* Content Container - positioned at top with padding */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4 pt-16 sm:pt-20 text-center w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Semi-transparent background panel for text */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg -z-10"></div>

        {/* Logo with animation */}
        <motion.div
          className="h-16 w-28 flex items-center justify-center mb-4"
          variants={fadeIn}
        >
          <img src={logo} alt="TechFest Logo" className="h-full w-auto object-contain drop-shadow-glow" />
        </motion.div>

        {/* TECHFEST text with better styling */}
        <motion.h1
          className="font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 text-2xl sm:text-4xl font-bold mb-6"
          variants={fadeIn}
        >
          TECHFEST
        </motion.h1>

        {/* Main heading with improved typing animation */}
        <motion.div
          className="mb-10 px-4"
          variants={fadeIn}
        >
          <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold font-serif">
            Welcome to{" "}
          </h2>
          <div className="h-16 sm:h-12 flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-xl sm:text-3xl lg:text-4xl font-bold">
              <TypeAnimation
                sequence={[
                  "the realm of technology",
                  1000,
                  "the future of innovation",
                  1000,
                  "the digital revolution",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono"
              />
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full text-white font-bold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 mb-10"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
          <TechBoxes/>
      <About />
      <Domains />
      <Timeline />
      <Prizes/>
      <Sponsers />
      <Galary />
      <Footer />
      </>
  );
};

export default Home;