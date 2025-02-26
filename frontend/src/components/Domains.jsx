import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Environment } from "@react-three/drei";
import Hackathon from "./HackathonPage";
import ProjectCompetitions from "./ProjectCompetitionPage";
import Robotics from "./RoboticsCompetitionPage";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
};

const domains = [
  {
    title: "Hackathon",
    description: "24-hour coding marathon to build innovative solutions. Compete with the best minds in technology.",
    modelPath: "/models/laptop.glb", // Replace with your model
    gradient: "from-purple-600 to-blue-500",
    component: Hackathon,
  },
  {
    title: "Project Competitions",
    description: "Showcase your groundbreaking projects and technical innovations to industry experts.",
    modelPath: "/models/robot.glb", // Replace with your model
    gradient: "from-orange-500 to-red-500",
    component: ProjectCompetitions,
  },
  {
    title: "Robotics Competition",
    description: "Battle it out in the arena with your custom-built robots and autonomous systems.",
    modelPath: "/models/drone.glb", // Replace with your model
    gradient: "from-green-500 to-teal-500",
    component: Robotics,
  },
];

const DomainCard = ({ domain, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
        <div className="h-64 w-full mb-6">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Model path={domain.modelPath} />
              </Float>
              <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <h3 className={`text-2xl font-bold bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent mb-4`}>
          {domain.title}
        </h3>
        <p className="text-gray-400 mb-6">{domain.description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className={`w-full py-3 bg-gradient-to-r ${domain.gradient} rounded-lg text-white font-semibold`}
        >
          Explore More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Domains = () => {
  const [activePage, setActivePage] = useState(null);

  if (activePage) {
    const PageComponent = activePage;
    return (
      <div className="relative">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setActivePage(null)}
          className="fixed top-4 left-4 z-50 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300"
        >
          ← Back to Domains
        </motion.button>
        <PageComponent />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#030014] py-20 px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400"
        >
          Event Domains
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <DomainCard
              key={index}
              domain={domain}
              onClick={() => setActivePage(domain.component)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;