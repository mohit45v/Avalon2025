import React, { useState } from "react";
import Hackathon from "./HackathonPage";
import ProjectCompetitions from "./ProjectCompetitionPage";
import Robotics from "./RoboticsCompetitionPage";

const domains = [
  {
    title: "Hackathon",
    description: "A 24-hour coding competition to test your problem-solving skills.",
    image: "https://source.unsplash.com/400x300/?hackathon,technology",
    component: Hackathon,
  },
  {
    title: "Project Competitions",
    description: "Showcase your creativity and design stunning visuals.",
    image: "https://source.unsplash.com/400x300/?graphicdesign,art",
    component: ProjectCompetitions,
  },
  {
    title: "Robotics Competition",
    description: "Challenge your knowledge with an exciting tech quiz.",
    image: "https://source.unsplash.com/400x300/?quiz,brain",
    component: Robotics,
  },
];

const Domains = () => {
  const [activePage, setActivePage] = useState(null);

  if (activePage) {
    const PageComponent = activePage;
    return (
      <div>
        <button
          onClick={() => setActivePage(null)}
          className="fixed top-4 left-4 z-50 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
        >
          ← Back to Domains
        </button>
        <PageComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 font-sans flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-8">
        Event Domains
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {domains.map((domain, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={domain.image} alt={domain.title} className="w-full h-40 object-cover" />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2 text-red-400">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
              <button
                className="mt-4 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
                onClick={() => setActivePage(domain.component)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;