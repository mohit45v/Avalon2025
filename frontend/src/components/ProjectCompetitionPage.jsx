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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRegister = () => {
        const projectData = {
            name: "Robo Soccer",
            fee: "₹300",
            type: "Team Event",
            includes: [
                "Professional judging panel",
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
            {/* Back Button remains same */}
            
            {/* Background Effects remain same */}

            <div className="max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative">
                <header className="mb-12 text-center relative">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Robo Soccer Challenge
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Where engineering meets sports in an exciting robotic football competition
                    </p>
                </header>

                {/* Game Rules Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Game Rules & Format
                    </h2>
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20">
                        <h3 className="text-xl font-bold text-gray-300 mb-4">Match Format</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Initial knockout rounds: 2 minutes per half</li>
                            <li>• Quarterfinals and Semifinals: 3 minutes per half</li>
                            <li>• Finals: 4 minutes per half</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-300 mt-6 mb-4">Key Rules</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Bots must remain as a single unit without separating</li>
                            <li>• Independent power supply required</li>
                            <li>• No lifting of the ball allowed</li>
                            <li>• Entering opponent's penalty arc is a foul</li>
                            <li>• 2-minute adjustment time at start of each half</li>
                        </ul>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Contact Information
                    </h2>
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20">
                        <ul className="space-y-4 text-gray-400">
                            <li>• Sarthak Pawar - Avalon Secretary - +91 9870308347</li>
                            <li>• Asad Shaikh - Avalon Publicity Secretary +917208507297</li>
                            <li>• Afraz Khan - Avalon Deputy Secretary - +91 9987866977</li>
                        </ul>
                    </div>
                </section>

                {/* Registration Section */}
                <section className="text-center pb-24 mx-4 sm:mx-6 lg:mx-8">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                        Ready to Compete?
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Registration Fee: ₹300 per team
                    </p>
                    <p className="text-xl text-gray-300 mb-6">
                        Event Date: 21 March 2025
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

                {/* Contact component remains same */}
            </div>
        </div>
    );
};

export default ProjectCompetitionPage;