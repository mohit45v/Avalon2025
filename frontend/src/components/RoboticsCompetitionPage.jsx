import React from 'react';
import { BsSpeedometer, BsGear, BsTools, BsTrophy, BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import image from "../../dist/assets/roborace.jpg"
import Contact from './Contact';

const RoboticsCompetitionPage = () => {
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRegister = () => {
        // Store robotics competition data in localStorage
        const roboticsData = {
            name: "ROBO Race",
            fee: "₹300",
            difficulty: "Intermediate",
            includes: [
                "Access to race track for practice",
                "Technical support",
                "Certificate of participation",
                "Chance to win from ₹8,000 prize pool",
                "Networking opportunities"
            ]
        };
        localStorage.setItem('selectedWorkshop', JSON.stringify(roboticsData));
        navigate('/register');
    };

    return (
        <div className="w-full min-h-screen bg-[#030014]">
            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="fixed top-8 left-8 flex items-center gap-2 text-purple-400 hover:text-purple-300 z-50 group"
            >
                <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </button>

            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
            </div>

            <div className="max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative">
                <header className="mb-12 text-center relative">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        ROBO Race 2025
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Speed. Precision. Innovation.
                    </p>
                </header>

                {/* Hero section */}
                <div className="relative p-8 mb-16 rounded-lg overflow-hidden mx-4 sm:mx-6 lg:mx-8">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                                <h2 className="text-3xl font-bold mb-4 text-white">Race to Victory!</h2>
                                <p className="text-lg mb-6 text-gray-300">
                                    Design and program a robot that can complete the given track quickly while overcoming various hurdles. The fastest and most efficient bot wins!
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleRegister}
                                        className="bg-gradient-to-r from-purple-600 to-orange-600 px-6 py-2 rounded-full text-white font-bold hover:opacity-90 transition"
                                    >
                                        Register Now - ₹300/team
                                    </motion.button>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <div className="relative rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 mix-blend-overlay"></div>
                                    <img
                                        src={image}
                                        alt="Robo Race"
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                        style={{
                                            maxHeight: '300px',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Details Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Event Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Date & Time</h3>
                            <p className="text-gray-400">March 16, 2025</p>
                            <p className="text-gray-400">Prize Pool: ₹8,000/-</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Registration</h3>
                            <p className="text-gray-400">₹300 per team</p>
                            <p className="text-gray-400">2-5 members per team</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Competition Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsSpeedometer />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Speed Zones</h3>
                            <p className="text-gray-400">Test your robot's speed and control in specialized racing zones.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsGear />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Obstacles</h3>
                            <p className="text-gray-400">Navigate through challenging obstacles and terrain.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsTools />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Technical Support</h3>
                            <p className="text-gray-400">Get guidance from experienced mentors throughout the event.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsTrophy />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Prizes</h3>
                            <p className="text-gray-400">Compete for a prize pool of ₹10,000 and recognition.</p>
                        </div>
                    </div>
                </section>

                {/* Rules Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Competition Rules
                    </h2>
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20">
                        <ul className="space-y-4 text-gray-400">
                            <li>• Teams of 2-5 members or individual participation allowed</li>
                            <li>• Robots must adhere to size and weight constraints</li>
                            <li>• Track includes speed zones, obstacles, and turns</li>
                            <li>• Robot completing the track in shortest time wins</li>
                            <li>• All robots must be self-contained and autonomous</li>
                        </ul>
                    </div>
                </section>

                {/* Timeline Section */}
                <section ref={ref} className="relative mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Event Timeline
                    </h2>

                    <div className="relative max-w-6xl mx-auto w-full px-4">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={inView ? { height: "100%" } : {}}
                                transition={{ duration: 1.5 }}
                                className="h-full w-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-orange-500"
                            />
                        </div>

                        {/* Timeline Events */}
                        {[
                            { time: "10:00 AM", title: "Robo Race Starts", description: "Competition begins" },
                            { time: "1:00 PM", title: "Robo Race Ends", description: "Completion of race rounds" },
                            { time: "1:15 PM", title: "Prize Distribution", description: "Awards for Robo Race winners" },
                            { time: "2:30 PM", title: "Robo Sumo Round 1", description: "Initial rounds of Robo Sumo" },
                            { time: "3:30 PM", title: "Robo Sumo Quarters", description: "Quarter-final matches" },
                            { time: "4:15 PM", title: "Robo Sumo SF", description: "Semi-final matches" },
                            { time: "4:45 PM", title: "Robo Sumo Championship", description: "Final championship match" },
                            { time: "5:00 PM", title: "Prize Distribution", description: "Awards ceremony for Robo Sumo" },
                        ].map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${
                                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                }`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative p-4 md:p-6 rounded-xl backdrop-blur-sm bg-black/40 border border-white/10 group hover:border-purple-500/50 transition-all duration-300"
                                    >
                                        <div className="absolute left-0 md:left-auto top-1/2 md:top-0 transform -translate-x-full md:-translate-y-1/2 md:translate-x-0 bg-gradient-to-r from-purple-600 to-orange-600 px-3 md:px-4 py-1 rounded-full">
                                            <span className="text-sm md:text-base text-white font-medium">{event.time}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mt-2 md:mt-4 group-hover:text-purple-400 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-400 mt-2">{event.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center pb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Ready to Race?
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                        Join us for an exciting day of robotics and racing!
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRegister}
                        className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition"
                    >
                        Register Now - ₹300 per team
                    </motion.button>
                </section>

                {/* Add Contact Section */}
                <div id="contact" className="w-full">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default RoboticsCompetitionPage;