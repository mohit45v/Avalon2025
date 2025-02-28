import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Hackathon from "./HackathonPage";
import ProjectCompetitions from "./ProjectCompetitionPage";
import Robotics from "./RoboticsCompetitionPage";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
};
<div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
  <div className="w-full md:w-1/2">
    
  </div>
  <div className="w-full md:w-1/2 space-y-6">
    
  </div>
</div>
const domains = [
  {
    title: "Avalon 2025 Hackathon",
    description: "Join Maharashtra's premier 24-hour coding marathon at Avalon 2025. Build innovative solutions and compete with the best minds at Terna Engineering College.",
    modelPath: "/models/laptop.glb",
    gradient: "from-purple-600 to-blue-500",
    path: "/hackathon",
    component: Hackathon,
  },
  {
    title: "Avalon Project Showcase",
    description: "Present your innovations at Avalon 2025's flagship project competition. Get feedback from industry experts at Terna Engineering College.",
    modelPath: "/models/robot.glb",
    gradient: "from-orange-500 to-red-500",
    path: "/project",
    component: ProjectCompetitions,
  },
  {
    title: "Avalon Robotics Battle",
    description: "Compete in Avalon 2025's premier robotics competition. Showcase your autonomous systems at Terna Engineering's biggest tech event.",
    modelPath: "/models/drone.glb",
    gradient: "from-green-500 to-teal-500",
    path: "/robotics",
    component: Robotics,
  },
];

const DomainCard = ({ domain, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group"
      itemScope
      itemType="https://schema.org/Event"
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

        <h3 
          className={`text-2xl font-bold bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent mb-4`}
          itemProp="name"
        >
          {domain.title}
        </h3>
        <p className="text-gray-400 mb-6" itemProp="description">{domain.description}</p>
        <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
        <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />
        <meta itemProp="location" content="Terna Engineering College, Nerul" />

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
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Avalon 2025 Events - Maharashtra's Biggest Technical Festival at Terna Engineering</title>
        <meta name="description" content="Experience Avalon 2025 at Terna Engineering College - featuring 48-hour Hackathon, Project Showcase, and Robotics Competition. Join Maharashtra's largest technical festival." />
        <meta name="keywords" content="Avalon, Avalon 2025, Avalon techfest, Avalon Terna, Terna Engineering College events, Mumbai hackathon, Maharashtra technical festival, Avalon hackathon, Avalon robotics" />
        <meta property="og:title" content="Avalon 2025 - Technical Festival at Terna Engineering College" />
        <meta property="og:description" content="Join Avalon 2025, Maharashtra's biggest technical festival at Terna Engineering College. Participate in Hackathon, Project Showcase, and Robotics competitions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Avalon 2025",
            "description": "Maharashtra's largest technical festival at Terna Engineering College",
            "startDate": "2025-04-03",
            "endDate": "2025-04-05",
            "location": {
              "@type": "Place",
              "name": "Terna Engineering College",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nerul",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Terna Engineering College",
              "url": "https://ternaengg.ac.in"
            }
          })}
        </script>
      </Helmet>

      <section 
        className="relative min-h-screen bg-[#030014] py-20 px-8"
        itemScope 
        itemType="https://schema.org/Event"
      >
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
            itemProp="name"
          >
            Event Domains
          </motion.h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8"
            itemProp="subEvents"
          >
            {domains.map((domain) => (
              <DomainCard
                key={domain.title}
                domain={domain}
                onClick={() => navigate(domain.path)}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;