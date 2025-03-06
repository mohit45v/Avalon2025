import React from 'react';
import { BsSpeedometer, BsGear, BsTools, BsTrophy } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';

const RoboticsCompetitionPage = () => {
    const navigate = useNavigate();
    const { inView } = useInView();

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
                "Chance to win from ₹10,000 prize pool",
                "Networking opportunities"
            ]
        };
        localStorage.setItem('selectedWorkshop', JSON.stringify(roboticsData));
        navigate('/register');
    };

    // Add prizes array after existing constants
    const prizes = [
        {
            position: "1st",
            prize: "₹5,000",
            benefits: ["Cash Prize", "Robotics Kit", "Technical Mentorship", "Industry Recognition"],
            gradient: "from-yellow-400 via-yellow-500 to-orange-500",
            scale: 1.1,
            trophy: "🏆"
        },
        {
            position: "2nd",
            prize: "₹3,000",
            benefits: ["Cash Prize", "Technical Resources", "Recognition"],
            gradient: "from-gray-300 via-gray-400 to-gray-500",
            scale: 1,
            trophy: "🥈"
        },
        {
            position: "3rd",
            prize: "₹2,000",
            benefits: ["Cash Prize", "Certificate of Excellence"],
            gradient: "from-amber-700 via-amber-800 to-amber-900",
            scale: 0.95,
            trophy: "🥉"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#030014]">
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
                            <p className="text-gray-400">Prize Pool: ₹10,000/-</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Registration</h3>
                            <p className="text-gray-400">₹300 per team</p>
                            <p className="text-gray-400">2-5 members per team</p>
                        </div>
                    </div>
                </section>

                {/* Prize Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Prizes & Rewards
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {prizes.map((prize, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Tilt
                                    options={{
                                        max: 25,
                                        scale: prize.scale,
                                        speed: 450,
                                    }}
                                    className="relative group"
                                >
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${prize.gradient} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                                    <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                                        <div className="text-6xl mb-6">{prize.trophy}</div>
                                        <h3 className={`text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent mb-4`}>
                                            {prize.position}
                                        </h3>
                                        <div className="text-3xl font-bold text-white mb-6">{prize.prize}</div>
                                        <ul className="space-y-3">
                                            {prize.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center text-gray-300">
                                                    <span className="mr-2">✨</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
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
            </div>
        </div>
    );
};

export default RoboticsCompetitionPage;