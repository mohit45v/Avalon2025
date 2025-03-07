import React from 'react';
import { BsTools, BsLightbulb, BsTrophy, BsPeople, BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import {useRef} from 'react';
import image from "../../dist/assets/cubecasting.jpg"
import Contact from './Contact';


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
                        <div className="md:w-1/3">
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 mix-blend-overlay"></div>
                                <img
                                        src={image}
                                        alt="Cube Casting Challenge"
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

                {/* Add Contact Section at the bottom, just before the closing div */}
                <div id="contact" className="w-full">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default ProjectCompetitionPage;