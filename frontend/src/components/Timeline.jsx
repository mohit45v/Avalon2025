import React from "react";

const timelineData = [
  {
    date: "March 10, 2025",
    title: "Event Kickoff",
    description: "The grand opening ceremony of the fest.",
  },
  {
    date: "March 12, 2025",
    title: "Hackathon",
    description: "A 24-hour coding competition with exciting prizes.",
  },
  {
    date: "March 15, 2025",
    title: "Guest Speaker",
    description: "A talk by an industry expert on future technologies.",
  },
  {
    date: "March 18, 2025",
    title: "Closing Ceremony",
    description: "Prize distribution and valedictory session.",
  },
];

const Timeline = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-12">Event Timeline</h2>
        
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-500 h-full"></div>

          {/* Timeline Items */}
          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full shadow-lg font-bold">
                {index + 1}
              </div>

              {/* Timeline Content */}
              <div className="w-full md:w-5/12 px-6 py-4 bg-gray-800 text-white rounded-lg shadow-lg mt-12 md:mt-0">
                <p className="text-indigo-300 font-semibold">{event.date}</p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
