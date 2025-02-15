import React from "react";
// import { Link } from "react-router-dom";

const domains = [
  {
    title: "Hackathon",
    description: "A 24-hour coding competition to test your problem-solving skills.",
    image: "https://source.unsplash.com/400x300/?hackathon,technology",
    link: "/hackathon",
  },
  {
    title: "Designing",
    description: "Showcase your creativity and design stunning visuals.",
    image: "https://source.unsplash.com/400x300/?graphicdesign,art",
    link: "/designing",
  },
  {
    title: "Quiz",
    description: "Challenge your knowledge with an exciting tech quiz.",
    image: "https://source.unsplash.com/400x300/?quiz,brain",
    link: "/quiz",
  },
];

const Domains = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Event Domains</h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {domains.map((domain, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={domain.image} alt={domain.title} className="w-full h-40 object-cover" />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
              
                <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300">
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
