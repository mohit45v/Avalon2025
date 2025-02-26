import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sponsors = [
  "https://cdn.iconscout.com/icon/free/png-256/free-devfolio-logo-icon-download-in-svg-png-gif-file-formats--brand-logos-icons-1399882.png?f=webp",
  "https://icoanalytics.org/wp-content/uploads/2023/11/Devfolio.png",
  "https://devfolio.co/blog/content/images/2021/04/ethindia-1.jpg",
  "https://logowik.com/content/uploads/images/replit4759.logowik.com.webp",
  "https://images.seeklogo.com/logo-png/39/1/solana-sol-logo-png_seeklogo-398274.png",
  "https://cdn.haproxy.com/img/containers/partner_integrations/digital-ocean-haproxy.png/dc4ac5d335a98ee7a0792ca01ce9a94c/digital-ocean-haproxy.webp",
  "https://avatars.sched.co/8/53/18912119/avatar.jpg?d2e",
  "https://cdn.prod.website-files.com/6245dcc971d30346418991c5/63489231b0aa8b18c17a94a3_WhatisFilecoin.png",
];
// In Sponsors component


  return (
    <section ref={ref} className="relative min-h-screen bg-[#030014] py-20 px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-orange-900/10" />
      </div>

      {/* Animated Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] blur-[120px] rounded-full bg-purple-500/10 -top-48 -left-48"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute w-[600px] h-[600px] blur-[120px] rounded-full bg-orange-500/10 -bottom-48 -right-48"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400 mb-6">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-400">
            Partnering with industry leaders to foster innovation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <motion.img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="w-32 sm:w-36 md:w-44 lg:w-52 object-contain filter hover:brightness-125 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-bold hover:opacity-90 transition duration-300"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );

