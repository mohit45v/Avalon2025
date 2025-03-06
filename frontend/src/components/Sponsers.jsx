import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sponsors = [
  "https://res.cloudinary.com/dgf0khv5f/image/upload/v1741272304/idp_m5k0lk.jpg",
  "https://icoanalytics.org/wp-content/uploads/2023/11/Devfolio.png",
  "https://devfolio.co/blog/content/images/2021/04/ethindia-1.jpg",
  "https://logowik.com/content/uploads/images/replit4759.logowik.com.webp",
  "https://images.seeklogo.com/logo-png/39/1/solana-sol-logo-png_seeklogo-398274.png",
  "https://cdn.haproxy.com/img/containers/partner_integrations/digital-ocean-haproxy.png/dc4ac5d335a98ee7a0792ca01ce9a94c/digital-ocean-haproxy.webp",
  "https://avatars.sched.co/8/53/18912119/avatar.jpg?d2e",
  "https://cdn.prod.website-files.com/6245dcc971d30346418991c5/63489231b0aa8b18c17a94a3_WhatisFilecoin.png",
];

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Our Past Sponsors
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Empowering Innovation Together
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-5xl mx-auto"
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
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="flex items-center justify-center p-4"
            >
              <motion.img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="w-32 sm:w-36 md:w-40 object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.2)]"
                animate={{ 
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut",
                  delay: index * 0.2 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full text-white font-bold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;

