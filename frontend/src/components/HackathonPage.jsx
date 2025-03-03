import React from 'react';
import { BsCode, BsLightbulb, BsTrophy, BsPeople } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Contact from './Contact';

const HackathonPage = () => {
    // Add useEffect to handle scroll on component mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#030014]">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
            </div>
            <div className="max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative">
                <header className="mb-12 text-center relative">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">CodeCraft Hackathon 2025</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        48 hours of coding, innovation, and problem-solving to create cutting-edge solutions for real-world challenges.
                    </p>
                </header>
            </div>
            {/* Hero section */}
            <div className="relative p-8 mb-16 rounded-lg overflow-hidden mx-4 sm:mx-6 lg:mx-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">Are you ready to hack the future?</h2>
                            <p className="text-lg mb-6 text-gray-300">
                                Join the largest student-run hackathon on campus and showcase your coding and problem-solving skills.
                                Work in teams, get mentored by industry experts, and compete for exciting prizes!
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-purple-600 to-orange-600 px-6 py-2 rounded-full text-white font-bold hover:opacity-90 transition">
                                    Register Now
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-white font-bold hover:bg-white/20 transition">
                                    View Projects
                                </motion.button>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 mix-blend-overlay"></div>
                                <img
                                    src="/hackathon-hero.jpg"
                                    alt="Hackathon illustration"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Timeline section */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">Event Timeline</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

                    {/* Timeline items */}
                    <div className="flex flex-col space-y-8">
                        {/* Registration */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-white">Registration Opens</h3>
                                <p className="text-gray-300">Submit your team details and project idea</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    1
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-blue-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">March 10-25, 2025</p>
                                    <p>Early bird registration with discounted fees</p>
                                </div>
                            </div>
                        </div>

                        {/* Kick-off */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-blue-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 2, 2025 • 6:00 PM</p>
                                    <p>Main Auditorium, Tech Block</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    2
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-white">Kick-off Ceremony</h3>
                                <p className="text-gray-300">Theme announcement and team introduction</p>
                            </div>
                        </div>

                        {/* Hackathon */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-white">Hackathon (48 hours)</h3>
                                <p className="text-gray-300">Non-stop coding, mentoring sessions, and mini-challenges</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    3
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-blue-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 3-5, 2025</p>
                                    <p>Begins at 7:00 PM on Friday and ends at 7:00 PM on Sunday</p>
                                </div>
                            </div>
                        </div>

                        {/* Judging */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-blue-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 5, 2025 • 8:00 PM - 10:00 PM</p>
                                    <p>Project presentations and demos</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    4
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-white">Judging & Results</h3>
                                <p className="text-gray-300">Final evaluation by judges and winners announcement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsCode />
                        </div>
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Coding Challenge</h3>
                        <p className="text-gray-600">Solve real-world problems using your programming skills in a time-bound environment.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsLightbulb />
                        </div>
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Innovation</h3>
                        <p className="text-gray-600">Think outside the box and create solutions that stand out for their creativity.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsPeople />
                        </div>
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Networking</h3>
                        <p className="text-gray-600">Connect with like-minded peers, mentors, and industry professionals.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsTrophy />
                        </div>
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Prizes</h3>
                        <p className="text-gray-600">Win exciting prizes, internship opportunities, and recognition for your talent.</p>
                    </div>
                </div>
            </section>

            {/* Rules and guidelines */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">Rules & Guidelines</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Team Size</h3>
                        <p className="text-gray-600">2-4 members per team. All team members must be enrolled students.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Original Work</h3>
                        <p className="text-gray-600">All code must be written during the hackathon. Using open-source libraries and APIs is allowed.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Submissions</h3>
                        <p className="text-gray-600">Projects must be submitted on our platform by the deadline with a working demo and source code.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Judging Criteria</h3>
                        <p className="text-gray-600">Projects will be judged based on innovation, technical complexity, practical application, and presentation.</p>
                    </div>
                </div>
            </section>

            {/* FAQ section */}
            <section className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl text-gray-300 font-bold mb-2">Do I need to be a CS student?</h3>
                        <p className="text-gray-600">No, we welcome students from all disciplines. You just need a passion for problem-solving and basic coding knowledge.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">What should I bring?</h3>
                        <p className="text-gray-600">Your laptop, charger, student ID, and any peripherals you need. We'll provide food, drinks, and a workspace.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Can I start working on my idea before the event?</h3>
                        <p className="text-gray-600">You can brainstorm ideas, but all coding must be done during the hackathon. Existing projects are not allowed.</p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-300 mb-2">Will there be food provided?</h3>
                        <p className="text-gray-600">Yes, we'll provide meals, snacks, and beverages throughout the event. Vegetarian and vegan options will be available.</p>
                    </div>
                </div>
            </section>

            <Contact/>
            {/* Call to action */}
            <section className="text-center pb-4 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">Ready to Showcase Your Skills?</h2>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">Join us for an unforgettable weekend of coding, learning, and networking.</p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition"
                >
                    Register for the Hackathon
                </motion.button>
            </section>
        </div>
    );
};

export default HackathonPage;