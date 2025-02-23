
const About = () => {
  return (
    <div className="min-h-screen text-white bg-black flex flex-col items-center justify-center px-8 py-20 font-sans">
      <h2 className="text-5xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 mb-12">
        About TechFest 2025
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl text-center leading-relaxed mb-16">
        Welcome to <span className="text-green-500 font-bold">TechFest 2025</span>, the biggest tech festival of the year! Bringing together innovative minds, coding enthusiasts, designers, and tech geeks, TechFest is the perfect platform to showcase your talent, learn from industry experts, and engage in thrilling competitions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">Workshops & Seminars</h3>
          <p className="text-gray-400 text-lg">Learn from industry leaders about the latest technologies.</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">Competitions</h3>
          <p className="text-gray-400 text-lg">Compete in Hackathons, Coding Challenges, UI/UX Design, and more.</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">Networking & Fun</h3>
          <p className="text-gray-400 text-lg">Meet like-minded people and grow your network.</p>
        </div>
      </div>

      <p className="text-xl text-gray-300 text-center max-w-3xl mt-16">
        Join us for an experience full of learning, innovation, and excitement! Stay tuned for event schedules and registrations.
      </p>
    </div>
  );
};

export default About;
