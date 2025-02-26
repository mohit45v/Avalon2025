import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Player } from "@lottiefiles/react-lottie-player";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#030014] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px] opacity-10 animate-grid-flow" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
        </div>
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
      <Navbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#030014] overflow-hidden">
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
        <div className="relative z-10 flex flex-col items-center px-4 pt-16 sm:pt-20 text-center w-full max-w-4xl">
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

          <motion.h1
            className="font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 text-3xl sm:text-5xl font-bold mb-6 tracking-wider"
            variants={fadeIn}
          >
            AVALON 2025
          </motion.h1>

          <motion.div
            className="mb-12 px-4"
            variants={fadeIn}
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 text-xl sm:text-3xl lg:text-4xl font-bold font-mono"
            />
          </motion.div>
        </div>
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