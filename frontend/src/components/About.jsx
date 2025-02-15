import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-bold text-indigo-400 mb-4">About TechFest 2025</h2>
      <p className="text-lg text-gray-300 max-w-3xl text-center">
        Welcome to <span className="text-indigo-400 font-semibold">TechFest 2025</span>, the biggest tech festival of the year! 
        Bringing together innovative minds, coding enthusiasts, designers, and tech geeks, TechFest is the perfect platform to 
        showcase your talent, learn from industry experts, and engage in thrilling competitions.  
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-300">Workshops & Seminars</h3>
          <p className="text-gray-400 mt-2">Learn from industry leaders about the latest technologies.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-300">Competitions</h3>
          <p className="text-gray-400 mt-2">Compete in Hackathons, Coding Challenges, UI/UX Design, and more.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-300">Networking & Fun</h3>
          <p className="text-gray-400 mt-2">Meet like-minded people and grow your network.</p>
        </div>
      </div>

      <p className="mt-8 text-gray-300 text-center max-w-2xl">
        Join us for an experience full of learning, innovation, and excitement! Stay tuned for event schedules and registrations.
      </p>
    </div>
  );
};

export default About;
