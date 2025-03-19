import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Hackathon from "./HackathonPage";
import ProjectCompetitions from "./ProjectCompetitionPage";
import Robotics from "./RoboticsCompetitionPage";

// Remove unused Model component and imports
const domains = [
  {
    title: "Innovate 3.0 (CLOSED)",
    description: "Registrations are now closed for our flagship 24-hour hackathon. Thank you for your interest!",
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
      "Registrations Closed",
      "24 hours to ideate and build",
      "Expert mentor guidance",
      "Networking opportunities",
      "Team size: 2-4 members"
    ],
    closed: true
  },
  {
    title: "Robo Soccer",
    description: "Experience the thrill of robotic football in this exciting competition! Teams build and control robots to compete in intense soccer matches, combining engineering skills with strategic gameplay. Test your robot's agility, control, and scoring abilities in this unique sporting challenge.",
    icon: "⚽",
    gradient: "from-orange-500 to-red-500",
    path: "/project",
    component: ProjectCompetitions,
    features: [
      "Strategic Gameplay",
      "Robot Engineering",
      "Technical Innovation",
      "Professional Judging",
      "Live Competition"
    ],
    highlights: [
      "2-minute halves in knockouts",
      "3-minute halves in quarters/semis",
      "4-minute halves in finals",
      "Team registration: ₹300",
      "Event Date: 21 March 2025"
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
        <div className="flex justify-center mb-6">
          <span className="text-7xl mb-4 animate-bounce-slow">{domain.icon}</span>
        </div>

        <h3 
          className={`text-2xl font-bold bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent mb-4`}
          itemProp="name"
        >
          {domain.title}
        </h3>
        <p className="text-gray-400 mb-6" itemProp="description">{domain.description}</p>

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

        <motion.button
          whileHover={{ scale: domain.closed ? 1 : 1.05 }}
          whileTap={{ scale: domain.closed ? 1 : 0.95 }}
          onClick={() => !domain.closed && onClick()}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 
            ${domain.closed 
              ? 'bg-gray-600 cursor-not-allowed opacity-75' 
              : `bg-gradient-to-r ${domain.gradient} hover:shadow-lg hover:shadow-purple-500/20`
            }`}
          disabled={domain.closed}
        >
          {domain.closed ? 'Registrations Closed' : 'Learn More'}
        </motion.button>
      </div>
    </motion.div>
  );
};

const Domains = () => {
  const navigate = useNavigate();

  const handleDomainClick = (path) => {
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
        </div>

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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;