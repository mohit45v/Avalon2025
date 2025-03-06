import React from 'react';
import { BsTools, BsLightbulb, BsTrophy, BsPeople, BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import {useRef} from 'react';

const ProjectCompetitionPage = () => {
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRegister = () => {
        // Store project competition data in localStorage
        const projectData = {
            name: "Cube Casting",
            fee: "₹150",
            difficulty: "Advanced",
            includes: [
                "Professional judging panel",
                "Materials and equipment access",
                "Technical guidance",
                "Certificate of participation",
                "Exciting prizes for winners"
            ]
        };
        localStorage.setItem('selectedWorkshop', JSON.stringify(projectData));
        navigate('/register');
    };

    // Update the prizes array with new amounts
    const prizes = [
        {
            position: "1st Prize",
            prize: "₹2,500",
            benefits: [
                "Cash Prize: ₹2,500",
                "Certificate of Excellence",
                "Technical Mentorship",
                "Project Support"
            ],
            gradient: "from-yellow-400 via-yellow-500 to-orange-500",
            scale: 1.1,
            trophy: "🏆"
        },
        {
            position: "2nd Prize",
            prize: "₹2,000",
            benefits: [
                "Cash Prize: ₹2,000",
                "Certificate of Merit",
                "Technical Resources",
                "Recognition"
            ],
            gradient: "from-gray-300 via-gray-400 to-gray-500",
            scale: 1,
            trophy: "🥈"
        },
        {
            position: "3rd Prize",
            prize: "₹500",
            benefits: [
                "Cash Prize: ₹500",
                "Certificate of Achievement",
                "Special Mention",
                "Goodies"
            ],
            gradient: "from-amber-700 via-amber-800 to-amber-900",
            scale: 0.95,
            trophy: "🥉"
        }
    ];

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
                        Cube Casting Challenge
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        The ultimate test of precision and engineering mastery
                    </p>
                </header>

                {/* Hero section */}
                <div className="relative p-8 mb-16 rounded-lg overflow-hidden mx-4 sm:mx-6 lg:mx-8">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                                <h2 className="text-3xl font-bold mb-4 text-white">Master the Art of Precision</h2>
                                <p className="text-lg mb-6 text-gray-300">
                                    Design and fabricate intricate structures within strict constraints. Showcase your technical expertise and innovation in this thrilling competition that tests your engineering prowess.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleRegister}
                                        className="bg-gradient-to-r from-purple-600 to-orange-600 px-6 py-2 rounded-full text-white font-bold hover:opacity-90 transition"
                                    >
                                        Register Now - ₹150/team
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
                            <p className="text-gray-400">March 17, 2025</p>
                            <p className="text-gray-400">Full-day event</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Registration</h3>
                            <p className="text-gray-400">₹150 per team</p>
                            <p className="text-gray-400">1-3 members per team</p>
                        </div>
                    </div>
                </section>

                {/* Prize Section */}
                <section ref={ref} className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Prizes & Rewards
                    </h2>
                    
                    {/* Total Prize Pool Banner */}
                    <div className="text-center mb-12">
                        <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
                            Total Prize Pool: ₹5,000
                        </h3>
                    </div>

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

                    {/* Additional Prizes Note */}
                    <div className="text-center mt-12 text-gray-400">
                        <p>Additional special mentions and category prizes</p>
                        <p className="mt-2 text-sm">* Terms and conditions apply</p>
                    </div>
                </section>

                {/* What to Expect Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        What to Expect
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsTools />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Precision Engineering</h3>
                            <p className="text-gray-400">Achieve the perfect balance of strength, accuracy, and durability in your cube.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsLightbulb />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Innovation</h3>
                            <p className="text-gray-400">Showcase your creative problem-solving abilities under pressure.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsPeople />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Expert Guidance</h3>
                            <p className="text-gray-400">Get feedback and insights from industry professionals.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="text-4xl text-purple-500 mb-4">
                                <BsTrophy />
                            </div>
                            <h3 className="text-xl text-gray-300 font-bold mb-2">Recognition</h3>
                            <p className="text-gray-400">Win exciting prizes and gain industry recognition.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center pb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Ready to Test Your Skills?
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                        Join us for an exciting day of engineering excellence and innovation.
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRegister}
                        className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition"
                    >
                        Register Now - ₹150 per team
                    </motion.button>
                </section>
            </div>
        </div>
    );
};

export default ProjectCompetitionPage;