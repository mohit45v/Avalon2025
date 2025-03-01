import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={ref} className="relative min-h-screen bg-[#030014] py-20 px-8">
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

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="relative aspect-[16/9] rounded-lg overflow-hidden"
          >
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{images[currentIndex].title}</h3>
                <p className="text-gray-300">{images[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600/50 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600/50 transition-colors"
          >
            →
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image (keep this part) */}
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
    </section>
  );
};

export default Gallery;