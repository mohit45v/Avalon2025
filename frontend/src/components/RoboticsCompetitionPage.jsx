import React from 'react';
import { BsGear, BsLightning, BsTools, BsPeople } from 'react-icons/bs';

const RoboticsCompetitionPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-red-700">BotBattle 2025: Robotics Competition</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Design, build, and program robots to compete in exciting challenges and showcase your engineering prowess.
                </p>
            </header>

            {/* Hero section */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 mb-12 text-white shadow-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4">Build. Program. Compete.</h2>
                        <p className="text-lg mb-6">
                            Put your robotics skills to the test in our annual competition featuring multiple challenging arenas.
                            From autonomous navigation to precise object manipulation, prove that your robot has what it takes to win!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition">
                                Register Team
                            </button>
                            <button className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-red-600 transition">
                                View Challenges
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <img
                            src="/api/placeholder/400/300"
                            alt="Robot competition illustration"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Timeline section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Competition Timeline</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

                    {/* Timeline items */}
                    <div className="flex flex-col space-y-8">
                        {/* Registration */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Team Registration</h3>
                                <p className="text-gray-600">Register your team and submit preliminary robot designs</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    1
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-red-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">February 15 - March 20, 2025</p>
                                    <p>Early registration gets access to exclusive workshops</p>
                                </div>
                            </div>
                        </div>

                        {/* Workshops */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-red-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">March 25 - April 1, 2025</p>
                                    <p>Engineering Building, Robotics Lab</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    2
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Pre-Competition Workshops</h3>
                                <p className="text-gray-600">Technical sessions on robot design, sensors, and programming</p>
                            </div>
                        </div>

                        {/* Qualification */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Qualification Rounds</h3>
                                <p className="text-gray-600">Initial challenges to qualify for the main competition</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    3
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-red-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 3, 2025</p>
                                    <p>9:00 AM - 5:00 PM, Main Arena</p>
                                </div>
                            </div>
                        </div>

                        {/* Finals */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-red-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 4-5, 2025</p>
                                    <p>Finals begin at 10:00 AM, Awards at 6:00 PM</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    4
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Main Competition & Finals</h3>
                                <p className="text-gray-600">Advanced challenges, head-to-head battles, and awards ceremony</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition categories */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Competition Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="h-48 bg-red-100 rounded-md mb-4 flex items-center justify-center">
                            <img
                                src="/api/placeholder/300/200"
                                alt="Line following robot"
                                className="max-h-full rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Line Follower Challenge</h3>
                        <p className="text-gray-600 mb-4">Design robots that can navigate complex paths with speed and accuracy.</p>
                        <ul className="text-gray-600 space-y-1 mb-4">
                            <li>• Autonomous navigation</li>
                            <li>• Sensor optimization</li>
                            <li>• Speed and precision scoring</li>
                        </ul>
                        <button className="text-red-600 font-semibold hover:underline">View Challenge Details →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="h-48 bg-red-100 rounded-md mb-4 flex items-center justify-center">
                            <img
                                src="/api/placeholder/300/200"
                                alt="Maze solver robot"
                                className="max-h-full rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Sumo Bot Wrestling</h3>
                        <p className="text-gray-600 mb-4">Build powerful robots that can push opponents out of the ring.</p>
                        <ul className="text-gray-600 space-y-1 mb-4">
                            <li>• Strategic programming</li>
                            <li>• Robust mechanical design</li>
                            <li>• Head-to-head matches</li>
                        </ul>
                        <button className="text-red-600 font-semibold hover:underline">View Challenge Details →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="h-48 bg-red-100 rounded-md mb-4 flex items-center justify-center">
                            <img
                                src="/api/placeholder/300/200"
                                alt="Object manipulation robot"
                                className="max-h-full rounded"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Obstacle Course</h3>
                        <p className="text-gray-600 mb-4">Navigate complex terrains, bridges, and obstacles while collecting objects.</p>
                        <ul className="text-gray-600 space-y-1 mb-4">
                            <li>• Terrain navigation</li>
                            <li>• Object manipulation</li>
                            <li>• Time-based scoring</li>
                        </ul>
                        <button className="text-red-600 font-semibold hover:underline">View Challenge Details →</button>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Participate?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-red-500 mb-4">
                            <BsGear />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Apply Engineering Skills</h3>
                        <p className="text-gray-600">Put theoretical knowledge into practice with real robotics challenges.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-red-500 mb-4">
                            <BsLightning />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Exciting Competition</h3>
                        <p className="text-gray-600">Experience the thrill of competing in front of a live audience.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-red-500 mb-4">
                            <BsPeople />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Industry Exposure</h3>
                        <p className="text-gray-600">Showcase your skills to industry professionals and potential employers.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-red-500 mb-4">
                            <BsTools />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Technical Growth</h3>
                        <p className="text-gray-600">Enhance your problem-solving and teamwork abilities through challenges.</p>
                    </div>
                </div>
            </section>

            {/* Rules and specifications */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Rules & Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">General Rules</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                                <p><strong>Team Size:</strong> 2-5 members per team. All team members must be current students.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                                <p><strong>Robot Construction:</strong> Robots must be built and programmed by team members. No pre-assembled robots allowed.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                                <p><strong>Safety:</strong> All robots must have a master kill switch and follow safety guidelines.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                                <p><strong>Fair Play:</strong> No intentional damaging of other robots or the arena. Violations result in disqualification.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">Robot Specifications</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                                <p><strong>Size Limit:</strong> Maximum dimensions of 30cm x 30cm x 30cm at the start of the match.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                                <p><strong>Weight Limit:</strong> Maximum weight of 3kg for line follower and obstacle course, 5kg for sumo bots.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                                <p><strong>Power Source:</strong> Only batteries are allowed. Maximum voltage of 24V.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                                <p><strong>Controller:</strong> Any microcontroller or development board is permitted (Arduino, Raspberry Pi, etc).</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Prizes section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Prizes & Rewards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-b from-amber-200 to-amber-100 p-6 rounded-lg shadow-md text-center">
                        <div className="text-5xl mb-4">🥇</div>
                        <h3 className="text-2xl font-bold mb-2">First Place</h3>
                        <ul className="space-y-2 text-left">
                            <li>• $1,000 Cash Prize</li>
                            <li>• Gold Trophy</li>
                            <li>• Internship Opportunities</li>
                            <li>• Professional Robot Kit</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-b from-gray-200 to-gray-100 p-6 rounded-lg shadow-md text-center">
                        <div className="text-5xl mb-4">🥈</div>
                        <h3 className="text-2xl font-bold mb-2">Second Place</h3>
                        <ul className="space-y-2 text-left">
                            <li>• $500 Cash Prize</li>
                            <li>• Silver Trophy</li>
                            <li>• Technical Workshop Passes</li>
                            <li>• Development Board Kit</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-b from-amber-700 to-amber-600 p-6 rounded-lg shadow-md text-center text-white">
                        <div className="text-5xl mb-4">🥉</div>
                        <h3 className="text-2xl font-bold mb-2">Third Place</h3>
                        <ul className="space-y-2 text-left">
                            <li>• $250 Cash Prize</li>
                            <li>• Bronze Trophy</li>
                            <li>• Technical Resources</li>
                            <li>• Component Kit</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Special Awards</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center">
                            <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 flex-shrink-0">🔧</span>
                            <p><strong>Best Technical Design</strong> - Recognition for innovative engineering solutions</p>
                        </li>
                        <li className="flex items-center">
                            <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 flex-shrink-0">💻</span>
                            <p><strong>Best Programming</strong> - Award for exceptional algorithm implementation</p>
                        </li>
                        <li className="flex items-center">
                            <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 flex-shrink-0">🔥</span>
                            <p><strong>Most Innovative Concept</strong> - For groundbreaking robot designs</p>
                        </li>
                        <li className="flex items-center">
                            <span className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 flex-shrink-0">🚀</span>
                            <p><strong>Rookie Team Award</strong> - Recognizing outstanding first-time participants</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQ section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Do I need prior robotics experience?</h3>
                        <p className="text-gray-600">While experience is helpful, we welcome beginners. Attend our pre-competition workshops to learn essential skills.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">What equipment should we bring?</h3>
                        <p className="text-gray-600">Bring your robot, spare parts, tools, laptop for programming, and backup batteries. Basic tools and some components will be available at the venue.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Can I participate in multiple categories?</h3>
                        <p className="text-gray-600">Yes, teams can register for multiple competition categories with either the same robot (if it meets all specifications) or different robots.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Is there a registration fee?</h3>
                        <p className="text-gray-600">Yes, there is a $50 fee per team for the first category and $25 for each additional category. Fee waivers are available based on need.</p>
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                            <p className="mb-4">Have questions about the robotics competition? Our team is here to help.</p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> robotics@college-techfest.edu</p>
                                <p><strong>Phone:</strong> (123) 456-7890</p>
                                <p><strong>Location:</strong> Engineering Building, Room 305</p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Your question or message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Ready to Battle?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Join teams from across the country in the ultimate robotics showdown.</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition">
                    Register Your Team Now
                </button>
            </section>
        </div>
    );
};

export default RoboticsCompetitionPage;