import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Timeline = () => {
  const eventDate = "2025-03-15T00:00:00";
  const [timeLeft, setTimeLeft] = useState({});
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
 

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
    <div ref={ref} className="relative bg-[#030014] text-white py-20 px-8 font-sans min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-purple-500/20 -top-48 -left-48"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 2.5,
          }}
          className="absolute w-[500px] h-[500px] blur-[100px] rounded-full bg-orange-500/20 -bottom-48 -right-48"
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Enhanced Countdown Section */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-orange-400"
        >
          Countdown to Avalon
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20"
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative p-6 bg-black rounded-lg">
                <animated.div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                  {value}
                </animated.div>
                <p className="text-sm uppercase text-gray-400 mt-2">{unit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Timeline Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400"
        >
          Event Timeline
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Zigzag line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5 }}
              className="h-full w-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-orange-500"
            />
          </div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-xl backdrop-blur-sm bg-black/40 border border-white/10 group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-orange-600 px-4 py-1 rounded-full">
                    <span className="text-white font-medium">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{event.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-25" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
