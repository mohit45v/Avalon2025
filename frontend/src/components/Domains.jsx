import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
// Remove these imports as they're no longer needed
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
// Update the domains array
const domains = [
  {
    title: "Innovate 3.0",
    description: "Dive into a whirlwind of creativity, problem-solving, and innovation at Avalon's flagship 24-hour hackathon! Bring your coding skills, ideas – it's going to be an adrenaline-fueled journey into the world of technology. Whether you're a seasoned developer or a coding enthusiast, this hackathon is your chance to collaborate, create and code your way to victory.",
    icon: "💻",
    gradient: "from-purple-600 to-blue-500",
    path: "/hackathon",
    component: Hackathon,
    features: [
      "24-Hour Development Time",
      "Real-World Problem Solving",
      "Expert Mentorship Available",
      "₹1,00,000+ Prize Pool",
      "Industry Recognition"
    ],
    highlights: [
      "Tackle real-world challenges",
      "24 hours to ideate and build",
      "Expert mentor guidance",
      "Networking opportunities",
      "Team size: 2-4 members"
    ]
  },
  {
    title: "Cube Casting",
    description: "Cube Casting is the ultimate test of precision and engineering mastery, where participants must design and fabricate intricate structures within strict constraints. This competition is a thrilling blend of creativity, strategy, and hands-on skills, pushing contestants to showcase their technical expertise and innovation.",
    icon: "🎯",
    gradient: "from-orange-500 to-red-500",
    path: "/project",
    component: ProjectCompetitions,
    features: [
      "Precision Engineering",
      "Material Optimization",
      "Technical Innovation",
      "Industry Evaluation",
      "Professional Guidance"
    ],
    highlights: [
      "Balance strength & accuracy",
      "Showcase fabrication skills",
      "Test precision under pressure",
      "Win industry recognition",
      "Team size: 1-3 members"
    ]
  },
  {
    title: "ROBO Race",
    description: "Design and program a robot that can complete the given track quickly while overcoming various hurdles. The fastest and most efficient bot wins! Open to all robotics enthusiasts, engineering students, and tech lovers eager to showcase their innovation and technical skills.",
    icon: "🤖",
    gradient: "from-green-500 to-teal-500",
    path: "/robotics",
    component: Robotics,
    features: [
      "Speed Zones Challenge",
      "Obstacle Navigation",
      "Technical Support",
      "Live Competition",
      "Equipment Access"
    ],
    highlights: [
      "2-5 members per team",
      "Size & weight constraints",
      "Speed zones & obstacles",
      "Shortest completion time wins",
      "Individual participation allowed"
    ]
  }
];

// Update the DomainCard component
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
        {/* Icon Section */}
        <div className="flex justify-center mb-6">
          <span className="text-7xl mb-4 animate-bounce-slow">{domain.icon}</span>
        </div>

        {/* Title & Description */}
        <h3 
          className={`text-2xl font-bold bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent mb-4`}
          itemProp="name"
        >
          {domain.title}
        </h3>
        <p className="text-gray-400 mb-6" itemProp="description">{domain.description}</p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {domain.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="mr-2">✨</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights List */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-purple-400 mb-2">Competition Highlights:</h4>
          <ul className="space-y-2">
            {domain.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onClick()}
          className={`w-full py-3 bg-gradient-to-r ${domain.gradient} rounded-lg text-white font-semibold 
            transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

// Add this to your existing CSS or tailwind.config.js
const customStyles = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
`;

// Update the grid layout in the Domains component
<div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
  itemProp="subEvents"
>
  {domains.map((domain) => (
    <DomainCard
      key={domain.title}
      domain={domain}
      onClick={() => handleDomainClick(domain.path)}
      className="w-full"
    />
  ))}
</div>
const Domains = () => {
  const navigate = useNavigate();

  const handleDomainClick = (path) => {
    // Add window.scrollTo to ensure page starts from top
    window.scrollTo(0, 0);
    navigate(path);
  };

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
                onClick={() => handleDomainClick(domain.path)}
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