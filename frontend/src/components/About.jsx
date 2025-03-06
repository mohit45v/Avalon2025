import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownloadBrochure = () => {
    const brochureUrl = "../../public/AVALON_2025_Brochure[1].pdf";
    
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'Avalon2025_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#030014]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-purple-500/30 -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-orange-500/30 -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/40 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                About Avalon 2025
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Avalon 2025, where technology meets imagination. Our annual techfest brings together the brightest minds to explore the frontiers of innovation and creativity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-purple-900/20 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold text-purple-400">100+</h4>
                  <p className="text-gray-400">Events</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-900/20 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold text-orange-400">5000+</h4>
                  <p className="text-gray-400">Participants</p>
                </div>
              </div>

              <motion.button
                onClick={handleDownloadBrochure}
                className="group relative overflow-hidden px-8 py-4 w-full sm:w-auto
                         bg-gradient-to-r from-purple-600/20 to-orange-600/20 
                         hover:from-purple-600/30 hover:to-orange-600/30
                         border border-purple-500/30 hover:border-purple-500/50
                         rounded-xl backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-orange-600/40 opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                  <FiDownload className="w-5 h-5 animate-bounce group-hover:animate-none" />
                  Download Brochure
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-orange-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative h-[400px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300 z-10" />
              <motion.img
                src="https://i.ibb.co/7QTWBK4/image-14.jpg"
                alt="Tech Sphere Visualization"
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
            </motion.div>
          </div>

          <motion.button
            onClick={handleDownloadBrochure}
            className="mt-8 w-full sm:hidden relative overflow-hidden px-8 py-4
                     bg-gradient-to-r from-purple-600/20 to-orange-600/20 
                     hover:from-purple-600/30 hover:to-orange-600/30
                     border border-purple-500/30 hover:border-purple-500/50
                     rounded-xl backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2 text-white font-semibold">
              <FiDownload className="w-5 h-5" />
              Download Brochure
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
