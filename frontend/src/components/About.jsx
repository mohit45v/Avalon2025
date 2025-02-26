
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#030014]">
      {/* Keep existing background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      {/* Keep existing glow lines */}
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
            {/* Content Section */}
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
            </motion.div>

            {/* Image Section with Enhanced Effects */}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
