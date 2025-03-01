import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "./logo.png";

const SCROLL_OFFSET = -80;
const SCROLL_DURATION = 700;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { title: "Home", path: "home", isScroll: true },
    { title: "About", path: "about", isScroll: true },
    { title: "Domains", path: "domains", isScroll: true },
    { title: "Timeline", path: "timeline", isScroll: true },
    { title: "Prizes", path: "prizes", isScroll: true },
    { title: "Sponsors", path: "sponsors", isScroll: true },
    { title: "Contact", path: "contact", isScroll: true }, 
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img src={logo} alt="Avalon 2025" className="h-8 w-auto" />
          </motion.div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/20 focus:outline-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isScroll ? (
                <ScrollLink
                  key={item.title}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  duration={SCROLL_DURATION}
                  className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all"
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.title}
                  to={item.path}
                  className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all"
                >
                  {item.title}
                </RouterLink>
              )
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-purple-500/20">
            {navItems.map((item) => (
              item.isScroll ? (
                <ScrollLink
                  key={item.title}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  duration={SCROLL_DURATION}
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all"
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.title}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all"
                >
                  {item.title}
                </RouterLink>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;