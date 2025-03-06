import React from "react"
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import Lottie from "lottie-react";
// Remove this import
// import trophyAnimation from "./animations/trophy.json";

// Add this constant before the Prize component
const trophyAnimation = {
  v: "5.7.1",
  fr: 30,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Trophy",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              t: 0,
              s: [0],
              h: 1,
            },
            {
              t: 30,
              s: [360],
              h: 1,
            },
            {
              t: 60,
              s: [720],
            },
          ],
        },
        p: { a: 0, k: [250, 250] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            {
              t: 0,
              s: [100, 100],
              h: 1,
            },
            {
              t: 30,
              s: [110, 110],
              h: 1,
            },
            {
              t: 60,
              s: [100, 100],
            },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              or: { a: 0, k: 100 },
              os: { a: 0, k: 0 },
              ix: 1,
              nm: "Star",
            },
          ],
          nm: "Trophy Shape",
        },
      ],
    },
  ],
};

const Prize = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  
  return (
    <section ref={ref} className="relative min-h-screen bg-[#030014] py-20 px-8">
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}
  
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>
  
      {/* Animated Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-purple-500/20 -top-48 -left-48"
        />
      </div>
  
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Prize Pool
            </span>
          </h2>
          <div className="w-32 h-32 mx-auto">
            <Lottie 
              animationData={trophyAnimation} 
              loop={true}
              onComplete={() => setShowConfetti(true)}
            />
          </div>
        </motion.div>

        {/* Single Prize Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-center">
                <div className="text-7xl mb-6">🏆</div>
                <h3 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  ₹1,00,000+
                </h3>
                <p className="text-2xl text-gray-300 mb-8">Total Prize Pool</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-purple-400">Prizes Include</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">💰</span>
                        Cash Prizes
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">💼</span>
                        Internship Opportunities
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">🚀</span>
                        Startup Support
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-purple-400">Additional Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">🎯</span>
                        Industry Mentorship
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">🤝</span>
                        Networking Events
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2">📜</span>
                        Certificates of Excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-gray-400"
        >
          <p className="text-lg">Special recognition and additional prizes for innovative solutions</p>
          <p className="mt-2 text-sm">* Terms and conditions apply</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prize;
  