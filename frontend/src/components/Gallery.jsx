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
      url: "https://i.ibb.co/Xj29dhx/image-6.jpg",
      title: "Avalon 2024",
      description: "Tech Innovation"
    },
    {
      url: "https://i.ibb.co/gSYfzTf/image-16.jpg",
      title: "Hackathon",
      description: "Coding Marathon"
    },
    {
      url: "https://i.ibb.co/CsHzffb/image-30.jpg",
      title: "Tech Expo",
      description: "Innovation Showcase"
    },
    {
      url: "https://i.ibb.co/vJr33SQ/image-32.jpg",
      title: "Workshop",
      description: "Learning Sessions"
    },
    {
      url: "https://i.ibb.co/9gQpmFp/image-27.jpg",
      title: "Competition",
      description: "Tech Challenges"
    },
    {
      url: "https://i.ibb.co/qszgW2k/image-28.jpg",
      title: "Awards",
      description: "Celebrating Excellence"
    },
    {
      url: "https://i.ibb.co/3MVfsWd/image-26.jpg",
      title: "Team Work",
      description: "Collaborative Innovation"
    },
    {
      url: "https://i.ibb.co/tLnR3jT/image-25.jpg",
      title: "Tech Talks",
      description: "Knowledge Sharing"
    },
    {
      url: "https://i.ibb.co/G7Y7VwR/image-23.jpg",
      title: "Project Demo",
      description: "Showcasing Solutions"
    },
    {
      url: "https://i.ibb.co/mBvNLp0/image-24.jpg",
      title: "Networking",
      description: "Building Connections"
    },
    {
      url: "https://i.ibb.co/JFG7jDs/image-20.jpg",
      title: "Mentorship",
      description: "Expert Guidance"
    },
    {
      url: "https://i.ibb.co/MBNrbbr/image-21.jpg",
      title: "Innovation Lab",
      description: "Experimental Zone"
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
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Capturing moments of innovation and excellence
          </p>
        </motion.div>

        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-full pb-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer flex-shrink-0 w-[calc(33.333%-1rem)]"
                onClick={() => setCurrentImage(image)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative overflow-hidden rounded-lg bg-[#030014]/80 backdrop-blur-sm p-0.5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-[300px]"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-300">{image.description}</p>
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