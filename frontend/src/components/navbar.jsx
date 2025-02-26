import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "./logo.png";

const SCROLL_OFFSET = -70;
const SCROLL_DURATION = 500;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Domains", path: "domains" },
    { title: "Timeline", path: "timeline" },
    { title: "Prizes", path: "prizes" },
    { title: "Sponsors", path: "sponsors" },
    { title: "Gallery", path: "gallery" },
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Register Now
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              spy={true}
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={SCROLL_DURATION}
              onClick={closeMobileMenu}
              className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium cursor-pointer"
              activeClass="text-purple-400"
            >
              {item.title}
            </Link>
          ))}
          <button 
            onClick={closeMobileMenu}
            className="w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Register Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;