import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, HeadsetIcon as VrHeadset, Gamepad2, ShieldCheck } from "lucide-react";
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const techAreas = [
  {
    title: "AR/VR",
    subtitle: "Reality Redefined",
    description: "Push the boundaries between real and virtual. Create immersive experiences that transform how we perceive and interact with digital worlds.",
    icon: VrHeadset,
    color: "from-purple-600 to-fuchsia-600",
    prize: "₹50,000",
    participants: "100+",
    difficulty: "Advanced"
  },
  {
    title: "AI-ML",
    subtitle: "Intelligence Evolved",
    description: "Forge the future of artificial intelligence. Build systems that think, learn, and revolutionize how machines understand our world.",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    prize: "₹50,000",
    participants: "150+",
    difficulty: "Expert"
  },
  {
    title: "Game Dev",
    subtitle: "Worlds Unleashed",
    description: "Craft universes of unlimited potential. Design games that challenge, inspire, and redefine interactive entertainment.",
    icon: Gamepad2,
    color: "from-blue-600 to-cyan-600",
    prize: "₹50,000",
    participants: "120+",
    difficulty: "Intermediate"
  },
  {
    title: "Cyber Security",
    subtitle: "Digital Fortress",
    description: "Master the art of digital defense. Protect the future from emerging threats in an increasingly connected world.",
    icon: ShieldCheck,
    color: "from-green-600 to-emerald-600",
    prize: "₹50,000",
    participants: "80+",
    difficulty: "Expert"
  }
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function TechBoxes() {
  const [selectedTech, setSelectedTech] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="relative min-h-screen bg-[#030014] py-24 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-5 animate-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-orange-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-fuchsia-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Tech Domains
            </span>
          </h2>
          <div className="h-16 mb-8">
            <TypeAnimation
              sequence={[
                'Choose Your Battlefield',
                2000,
                'Shape The Future',
                2000,
                'Make Your Mark',
                2000
              ]}
              wrapper="h3"
              speed={50}
              className="text-2xl text-gray-200"
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {techAreas.map((tech, index) => (
            <Tilt key={index} options={defaultTiltOptions}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTech(tech)}
                className="tech-card glass-effect rounded-2xl cursor-pointer group"
              >
                <div className={`h-full p-8 relative overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${tech.color} animate-neon`}>
                        <tech.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className={`text-sm font-semibold px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm
                        ${tech.difficulty === 'Expert' ? 'text-red-400' : 
                          tech.difficulty === 'Advanced' ? 'text-orange-400' : 'text-green-400'}`}>
                        {tech.difficulty}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-lg text-purple-300 mb-4">{tech.subtitle}</p>
                    <p className="text-gray-400 mb-6 line-clamp-3">{tech.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-sm text-gray-400">Prize Pool</p>
                        <p className="text-2xl font-bold text-white">{tech.prize}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Participants</p>
                        <p className="text-xl text-white font-medium">{tech.participants}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            {/* Modal content */}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}