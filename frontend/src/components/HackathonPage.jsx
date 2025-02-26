import React from 'react';
import { BsCode, BsLightbulb, BsTrophy, BsPeople } from 'react-icons/bs';

const HackathonPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-blue-700">CodeCraft Hackathon 2025</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    48 hours of coding, innovation, and problem-solving to create cutting-edge solutions for real-world challenges.
                </p>
            </header>

            {/* Hero section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-12 text-white shadow-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4">Are you ready to hack the future?</h2>
                        <p className="text-lg mb-6">
                            Join the largest student-run hackathon on campus and showcase your coding and problem-solving skills.
                            Work in teams, get mentored by industry experts, and compete for exciting prizes!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition">
                                Register Now
                            </button>
                            <button className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <img
                            src="/api/placeholder/400/300"
                            alt="Hackathon illustration"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Timeline section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Event Timeline</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

                    {/* Timeline items */}
                    <div className="flex flex-col space-y-8">
                        {/* Registration */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Registration Opens</h3>
                                <p className="text-gray-600">Submit your team details and project idea</p>
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
                                <h3 className="text-xl font-bold text-gray-800">Kick-off Ceremony</h3>
                                <p className="text-gray-600">Theme announcement and team introduction</p>
                            </div>
                        </div>

                        {/* Hackathon */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Hackathon (48 hours)</h3>
                                <p className="text-gray-600">Non-stop coding, mentoring sessions, and mini-challenges</p>
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
                                <h3 className="text-xl font-bold text-gray-800">Judging & Results</h3>
                                <p className="text-gray-600">Final evaluation by judges and winners announcement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsCode />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Coding Challenge</h3>
                        <p className="text-gray-600">Solve real-world problems using your programming skills in a time-bound environment.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsLightbulb />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-gray-600">Think outside the box and create solutions that stand out for their creativity.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsPeople />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Networking</h3>
                        <p className="text-gray-600">Connect with like-minded peers, mentors, and industry professionals.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                        <div className="text-4xl text-blue-500 mb-4">
                            <BsTrophy />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Prizes</h3>
                        <p className="text-gray-600">Win exciting prizes, internship opportunities, and recognition for your talent.</p>
                    </div>
                </div>
            </section>

            {/* Rules and guidelines */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Rules & Guidelines</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                            <p><strong>Team Size:</strong> 2-4 members per team. All team members must be enrolled students.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                            <p><strong>Original Work:</strong> All code must be written during the hackathon. Using open-source libraries and APIs is allowed.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                            <p><strong>Submissions:</strong> Projects must be submitted on our platform by the deadline with a working demo and source code.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                            <p><strong>Judging Criteria:</strong> Projects will be judged based on innovation, technical complexity, practical application, and presentation.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQ section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Do I need to be a CS student?</h3>
                        <p className="text-gray-600">No, we welcome students from all disciplines. You just need a passion for problem-solving and basic coding knowledge.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">What should I bring?</h3>
                        <p className="text-gray-600">Your laptop, charger, student ID, and any peripherals you need. We'll provide food, drinks, and a workspace.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Can I start working on my idea before the event?</h3>
                        <p className="text-gray-600">You can brainstorm ideas, but all coding must be done during the hackathon. Existing projects are not allowed.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Will there be food provided?</h3>
                        <p className="text-gray-600">Yes, we'll provide meals, snacks, and beverages throughout the event. Vegetarian and vegan options will be available.</p>
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
                            <p className="mb-4">Have questions about the hackathon? Reach out to our organizing team.</p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> hackathon@college-techfest.edu</p>
                                <p><strong>Phone:</strong> (123) 456-7890</p>
                                <p><strong>Location:</strong> Main Campus, Tech Innovation Center</p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your question or message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
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
                <h2 className="text-3xl font-bold mb-4">Ready to Showcase Your Skills?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Join us for an unforgettable weekend of coding, learning, and networking.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition">
                    Register for the Hackathon
                </button>
            </section>
        </div>
    );
};

export default HackathonPage;