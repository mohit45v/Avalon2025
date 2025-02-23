import { useEffect, useState } from "react";

const Timeline = () => {
  const eventDate = "2025-03-15T00:00:00";

  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(eventDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timelineEvents = [
    { time: "9:00 AM", title: "Registration & Check-in", description: "Participants arrive and complete registration." },
    { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome speech and event briefing by organizers." },
    { time: "11:00 AM", title: "Hacking Begins!", description: "Teams start working on their projects." },
    { time: "1:00 PM", title: "Lunch Break", description: "Refuel with some delicious food!" },
    { time: "6:00 PM", title: "Checkpoint & Mentorship", description: "Mentors provide feedback and guidance." },
    { time: "10:00 PM", title: "Submission Deadline", description: "Final project submission before judging starts." },
    { time: "11:00 PM", title: "Closing & Awards", description: "Winners announced and closing ceremony." },
  ];

  return (
    <div className="bg-black text-white py-20 px-8 font-sans min-h-screen flex flex-col items-center">
      {/* Countdown Timer Section */}
      <h1 className="text-3xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-12">Countdown to Hackathon</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xl font-medium mb-16">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="p-6 bg-gray-900 rounded-lg shadow-lg w-28 md:w-36">
            <p className="text-4xl font-bold text-purple-400">{value}</p>
            <p className="text-sm uppercase text-gray-400">{unit}</p>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-10">Event Timeline</h2>
      <div className="w-full max-w-4xl border-l-4 border-purple-500 pl-8 space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative p-6 bg-gray-900 rounded-lg shadow-lg">
            <div className="absolute -left-5 top-5 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
            <h3 className="text-xl font-bold text-purple-400">{event.time}</h3>
            <p className="text-2xl font-medium mb-2">{event.title}</p>
            <p className="text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
