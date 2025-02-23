import { motion } from "framer-motion";

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

export default function SponsorSection() {
  return (
    <div className="relative bg-black-200 py-20 px-8 text-white overflow-hidden w-full min-h-screen flex flex-col items-center justify-center font-sans">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-opacity-50 bg-black bg-cover bg-center blur-lg"></div>
      
      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Our Sponsors</h2>
        <p className="text-xl mb-16 max-w-4xl mx-auto text-gray-300">We are proud to be supported by these amazing sponsors who help make our event possible.</p>
      </div>

      <motion.div 
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full flex items-center justify-center rounded-2xl p-6 backdrop-blur-md shadow-2xl bg-white hover:scale-110 transition-transform duration-300"
          >
            <motion.img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="w-32 sm:w-36 md:w-44 lg:w-52 object-contain drop-shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}    
