import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-scroll";

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    {
      url: "https://source.unsplash.com/600x400/?hackathon",
      title: "Hackathon 2024",
      description: "24-hour coding marathon"
    },
    {
      url: "https://source.unsplash.com/600x400/?robotics",
      title: "Robotics Arena",
      description: "Next-gen robotics competition"
    },
    {
      url: "https://source.unsplash.com/600x400/?coding",
      title: "Code Warriors",
      description: "Programming challenges"
    },
    {
      url: "https://source.unsplash.com/600x400/?technology",
      title: "Tech Expo",
      description: "Innovation showcase"
    },
    {
      url: "https://source.unsplash.com/600x400/?workshop",
      title: "Workshop Sessions",
      description: "Learning and collaboration"
    },
    {
      url: "https://source.unsplash.com/600x400/?awards",
      title: "Awards Ceremony",
      description: "Celebrating excellence"
    }
  ];

  return (
    <section id="gallery" ref={ref} className="relative min-h-screen bg-[#030014] py-20 px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-orange-900/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400 mb-6">
            Event Gallery
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Capturing moments of innovation and excellence
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="hackathon"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-medium hover:opacity-90 transition duration-300 cursor-pointer"
            >
              Hackathon
            </Link>
            <Link
              to="robotics"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-medium hover:opacity-90 transition duration-300 cursor-pointer"
            >
              Robotics
            </Link>
            <Link
              to="workshops"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-medium hover:opacity-90 transition duration-300 cursor-pointer"
            >
              Workshops
            </Link>
          </div>
        </motion.div>

        <div id="hackathon" className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Hackathon Moments</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {images.slice(0, 8).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setCurrentImage(image)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative overflow-hidden rounded-lg bg-[#030014]/80 backdrop-blur-sm p-0.5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-20 md:h-24"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-1.5">
                        <h3 className="text-xs font-bold text-white mb-0.5 line-clamp-1">{image.title}</h3>
                        <p className="text-[10px] text-gray-300 line-clamp-1">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="robotics" className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Robotics Competition</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {images.slice(2, 10).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setCurrentImage(image)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative overflow-hidden rounded-lg bg-[#030014]/80 backdrop-blur-sm p-0.5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-20 md:h-24"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-1.5">
                        <h3 className="text-xs font-bold text-white mb-0.5 line-clamp-1">{image.title}</h3>
                        <p className="text-[10px] text-gray-300 line-clamp-1">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="workshops" className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Workshops</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {images.slice(4, 12).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setCurrentImage(image)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative overflow-hidden rounded-lg bg-[#030014]/80 backdrop-blur-sm p-0.5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-20 md:h-24"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-1.5">
                        <h3 className="text-xs font-bold text-white mb-0.5 line-clamp-1">{image.title}</h3>
                        <p className="text-[10px] text-gray-300 line-clamp-1">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="px-6 py-2 text-sm bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-medium hover:opacity-90 transition duration-300 cursor-pointer"
          >
            Back to Top
          </Link>
        </motion.div>

        {/* Modal for enlarged image */}
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030014]/95 backdrop-blur-md"
            onClick={() => setCurrentImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-3xl w-full bg-[#030014]/90 rounded-xl p-2 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{currentImage.title}</h3>
                <p className="text-gray-300">{currentImage.description}</p>
              </div>
              <button
                onClick={() => setCurrentImage(null)}
                className="absolute top-4 right-4 text-white bg-[#030014]/50 rounded-full p-2 hover:bg-purple-600/50 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;