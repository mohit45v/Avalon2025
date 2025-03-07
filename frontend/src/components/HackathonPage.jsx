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

    // Update the prizes array
    const prizes = [
        {
            position: "1st Prize",
            prize: "₹25,000",
            benefits: [
                "Cash Prize: ₹25,000",
                "Internship Opportunities",
                "Industry Mentorship",
                "Startup Support"
            ],
            gradient: "from-yellow-400 via-yellow-500 to-orange-500",
            scale: 1.1,
            trophy: "🏆"
        },
        {
            position: "2nd Prize",
            prize: "₹15,000",
            benefits: [
                "Cash Prize: ₹15,000",
                "Industry Recognition",
                "Networking Events",
                "Certificate of Excellence"
            ],
            gradient: "from-gray-300 via-gray-400 to-gray-500",
            scale: 1,
            trophy: "🥈"
        },
        {
            position: "3rd Prize",
            prize: "₹10,000",
            benefits: [
                "Cash Prize: ₹10,000",
                "Certificate of Excellence",
                "Special Recognition",
                "Goodies & Swag"
            ],
            gradient: "from-amber-700 via-amber-800 to-amber-900",
            scale: 0.95,
            trophy: "🥉"
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

            {/* Prize Section */}
            <section ref={ref} className="mb-24 mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                    Prizes & Rewards
                </h2>
                
                {/* Total Prize Pool Banner */}
                <div className="text-center mb-12">
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
                        Total Prize Pool: ₹50,000
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