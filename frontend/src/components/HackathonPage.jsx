import React from 'react';
import { BsCode, BsLightbulb, BsTrophy, BsPeople, BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import image from "../../dist/assets/hackathon1.jpg"
const HackathonPage = () => {
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    // Add useEffect to handle scroll on component mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const domains = [
        {
            title: "App/Web Development",
            icon: BsCode,
            description: "Create innovative web applications and mobile solutions using cutting-edge technologies."
        },
        {
            title: "AI/ML",
            icon: BsLightbulb,
            description: "Develop intelligent systems and machine learning models to solve complex problems."
        },
        {
            title: "WEB3",
            icon: BsPeople,
            description: "Build decentralized applications and explore blockchain technologies."
        },
        {
            title: "AR/VR Development",
            icon: BsTrophy,
            description: "Create immersive experiences using augmented and virtual reality technologies."
        }
    ];

    // Add this function to handle registration
    const handleRegister = () => {
        // Store hackathon data in localStorage
        const hackathonData = {
            name: "Hackathon",
            fee: "₹800",
            difficulty: "Advanced",
            includes: [
                "24-hour coding challenge",
                "Expert mentorship",
                "Meals and refreshments",
                "Certificate of participation",
                "Exciting prizes for winners"
            ]
        };
        localStorage.setItem('selectedWorkshop', JSON.stringify(hackathonData));
        navigate('/register'); // Navigate to registration form
    };

    const [activeDay, setActiveDay] = React.useState("day1");

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
                        INNOVATE 3.0
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        24 hours of innovation, coding, and problem-solving
                    </p>
                </header>
            </div>
            {/* Hero section */}
            <div className="relative p-8 mb-16 rounded-lg overflow-hidden mx-4 sm:mx-6 lg:mx-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Code the Future?</h2>
                            <p className="text-lg mb-6 text-gray-300">
                                Dive into a whirlwind of creativity, problem-solving, and innovation at Avalon's flagship 24-hour hackathon! Bring your coding skills, ideas – it's going to be an adrenaline-fueled journey into the world of technology.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleRegister}
                                    className="bg-gradient-to-r from-purple-600 to-orange-600 px-6 py-2 rounded-full text-white font-bold hover:opacity-90 transition"
                                >
                                    Register Now - ₹800/team
                                </motion.button>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 mix-blend-overlay"></div>
                                <img
                                    src={image}
                                    alt="Students collaborating on code"
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
                    Key Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Date & Time</h3>
                        <p className="text-gray-400">March 15-16, 2025</p>
                        <p className="text-gray-400">24-hour continuous hackathon</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Registration</h3>
                        <p className="text-gray-400">₹800 per team</p>
                        <p className="text-gray-400">2-4 members per team</p>
                    </div>
                </div>
            </section>

            {/* Domains Section */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                    Domains
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {domains.map((domain, index) => (
                        <div key={index} className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <domain.icon />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">{domain.title}</h3>
                            <p className="text-gray-400">{domain.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What to Expect Section */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                    What to Expect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Real-World Challenges</h3>
                        <p className="text-gray-400">Tackle actual industry problems and develop innovative solutions.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Expert Mentorship</h3>
                        <p className="text-gray-400">Get guidance and feedback from industry professionals throughout the event.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Exciting Prizes</h3>
                        <p className="text-gray-400">Win recognition, prizes, and opportunities on Avalon's official platforms.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Networking</h3>
                        <p className="text-gray-400">Connect with like-minded developers and industry experts.</p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={ref} className="relative mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                    Event Timeline
                </h2>

                {/* Day Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveDay("day1")}
                        className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                            activeDay === "day1"
                                ? "bg-gradient-to-r from-purple-600 to-orange-600 text-white"
                                : "border border-purple-500/20 text-gray-400 hover:border-purple-500/40"
                        }`}
                    >
                        Day 1 (15th Feb)
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveDay("day2")}
                        className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                            activeDay === "day2"
                                ? "bg-gradient-to-r from-purple-600 to-orange-600 text-white"
                                : "border border-purple-500/20 text-gray-400 hover:border-purple-500/40"
                        }`}
                    >
                        Day 2 (16th Feb)
                    </motion.button>
                </div>

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
                    {(activeDay === "day1" ? [
                        { time: "8:30 AM", title: "Check-in", description: "Registration and setup" },
                        { time: "10:00 AM", title: "Inauguration and Briefing", description: "Opening ceremony and rules explanation" },
                        { time: "11:00 AM", title: "Hackathon Begins", description: "Start your innovation journey" },
                        { time: "3:00 PM", title: "Lunch Break", description: "Recharge and network" },
                        { time: "4:00 PM", title: "Special Session", description: "TBA" },
                        { time: "6:00 PM", title: "Tea Time", description: "Evening refreshments" },
                        { time: "9:00 PM", title: "Dinner", description: "Night fuel for coding" },
                    ] : [
                        { time: "12:00 AM", title: "Midnight Interaction", description: "Network with fellow hackers" },
                        { time: "9:00 AM", title: "Breakfast", description: "Morning refreshments" },
                        { time: "12:00 PM", title: "Hackathon Ends", description: "Final submissions" },
                        { time: "12:30 PM", title: "Judging Begins", description: "Project evaluations" },
                        { time: "2:00 PM", title: "Prize Distribution", description: "Winners announcement and awards" },
                    ]).map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
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

            {/* Contact Section */}
            <Contact/>
            {/* Call to Action */}
            <section className="text-center pb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                    Ready to Hack?
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                    Join us for an unforgettable 24-hour journey of innovation and coding excellence.
                </p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRegister}
                    className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition"
                >
                    Register Now - ₹800 per team
                </motion.button>
            </section>
        </div>
    );
};

export default HackathonPage;