import * as React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation"; // Better typing library
import { motion } from "framer-motion"; // For smooth animations
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
import Navbar from "./Navbar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import { Player } from "@lottiefiles/react-lottie-player";

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

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#030014] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px] opacity-10 animate-grid-flow" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
        </div>
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

        {/* Animated Glow */}
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-purple-500/20 animate-pulse" />

        {/* Logo Container */}
        <motion.div className="relative z-10 mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-2xl bg-purple-500/30 rounded-full animate-pulse" />
            <img
              src={logo}
              alt="TechFest Logo"
              className="h-24 w-auto relative drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            />
          </motion.div>
        </motion.div>

        {/* Loading Animation */}
        <div className="relative z-10 w-64 h-64 mb-8">
          <Player
            autoplay
            loop
            src="https://lottie.host/2b7a442b-82e5-449f-a9c0-757f31d3e6f3/JHvGX3mqYY.json"
            className="w-full h-full"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="relative z-10 w-64 mb-4">
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-orange-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p 
            className="text-white text-sm mt-2 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Initializing System... {progress}%
          </motion.p>
        </div>

        {/* Tech Keywords */}
        <div className="relative z-10 flex gap-4 text-xs text-gray-400 font-mono mt-4">
          {['AI', 'Blockchain', 'IoT', 'Cloud', 'ML'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-1 rounded-full bg-white/5 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#030014] overflow-hidden">
        {/* Interactive Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 100, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: 0.5,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2,
                width: 1
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
                push: { quantity: 4 },
              }
            }
          }}
          className="absolute inset-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#030014]/50 to-[#030014] z-[2]" />

        {/* Content Container */}
        <motion.div
          className="relative z-[3] flex flex-col items-center px-4 pt-16 sm:pt-20 text-center w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {/* Logo Container with Glow Effect */}
          <motion.div
            className="relative h-20 w-32 mb-8"
            variants={fadeIn}
          >
            <div className="absolute inset-0 blur-2xl bg-purple-500/30 rounded-full animate-pulse" />
            <img 
              src={logo} 
              alt="TechFest Logo" 
              className="relative h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" 
            />
          </motion.div>

          {/* Title with Enhanced Styling */}
          <motion.h1
            className="font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 text-3xl sm:text-5xl font-bold mb-6 tracking-wider"
            variants={fadeIn}
          >
            AVALON 2025
          </motion.h1>

          {/* Typing Animation Container */}
          <motion.div
            className="mb-12 px-4"
            variants={fadeIn}
          >
            <h2 className="text-white/90 text-xl sm:text-3xl lg:text-4xl font-bold font-serif mb-4">
              Where Innovation Meets Infinity
            </h2>
            <div className="h-16 sm:h-12 flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 text-xl sm:text-3xl lg:text-4xl font-bold">
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
                  className="font-mono"
                />
              </span>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.button
            variants={fadeIn}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147,51,234,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-500 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 mb-10 relative overflow-hidden group"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
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