import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, HeadsetIcon as VrHeadset, Gamepad2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechBoxes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: "AI & ML", icon: "🤖", description: "Artificial Intelligence & Machine Learning" },
    { name: "Blockchain", icon: "⛓️", description: "Decentralized Technologies" },
    { name: "IoT", icon: "🌐", description: "Internet of Things" },
    { name: "AR/VR", icon: "🥽", description: "Augmented & Virtual Reality" },
    { name: "Robotics", icon: "🦾", description: "Advanced Robotics" },
    { name: "Cybersecurity", icon: "🔒", description: "Digital Security" },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technologies
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 3D Model Placeholder */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <iframe
          src="https://my.spline.design/technologicalsphere-xxxxxxxxxxxx/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default TechBoxes;
