import React from 'react';
import { BsLightbulb, BsMegaphone, BsGraphUp, BsTrophy } from 'react-icons/bs';

const ProjectCompetitionPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-green-700">InnoVenture: Project Competition</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Showcase your innovative projects and entrepreneurial ideas in front of industry experts and potential investors.
                </p>
            </header>

            {/* Hero section */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-8 mb-12 text-white shadow-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4">From Concept to Reality</h2>
                        <p className="text-lg mb-6">
                            InnoVenture is your platform to transform innovative ideas into tangible projects.
                            Present your solution to real-world problems and get feedback from industry veterans and peers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-green-600 px-6 py-2 rounded-full font-bold hover:bg-green-50 transition">
                                Submit Your Project
                            </button>
                            <button className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-green-600 transition">
                                View Past Winners
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <img
                            src="/api/placeholder/400/300"
                            alt="Project competition illustration"
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

                    {/* Timeline items */}
                    <div className="flex flex-col space-y-8">
                        {/* Submissions */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Project Submissions</h3>
                                <p className="text-gray-600">Submit your project abstract and initial proposal</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    1
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-green-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">February 1 - March 10, 2025</p>
                                    <p>Early submissions get detailed feedback from mentors</p>
                                </div>
                            </div>
                        </div>

                        {/* Shortlisting */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-green-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">March 15, 2025</p>
                                    <p>Announcement via email and website</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    2
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Shortlisting</h3>
                                <p className="text-gray-600">Top projects selected for the final round</p>
                            </div>
                        </div>

                        {/* Mentorship */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Mentorship Phase</h3>
                                <p className="text-gray-600">Refine your project with industry mentors</p>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    3
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3">
                                <div className="bg-green-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">March 20 - April 15, 2025</p>
                                    <p>Weekly check-ins and guidance sessions</p>
                                </div>
                            </div>
                        </div>

                        {/* Final Presentation */}
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-3">
                                <div className="bg-green-50 p-4 rounded-lg shadow">
                                    <p className="font-bold">April 25, 2025</p>
                                    <p>Live presentation at the InnoVenture Summit</p>
                                </div>
                            </div>
                            <div className="md:w-12 relative flex justify-center order-1">
                                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl z-10">
                                    4
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 order-3 md:order-1">
                                <h3 className="text-xl font-bold text-gray-800">Final Presentations</h3>
                                <p className="text-gray-600">Present your project to judges and audience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Participate?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-green-500 text-4xl mb-4">
                            <BsLightbulb />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Innovation Platform</h3>
                        <p className="text-gray-600">Showcase your creative solutions and receive validation from experts in the field.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-green-500 text-4xl mb-4">
                            <BsMegaphone />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Visibility</h3>
                        <p className="text-gray-600">Get your project in front of industry leaders, investors, and potential collaborators.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-green-500 text-4xl mb-4">
                            <BsGraphUp />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Growth Opportunity</h3>
                        <p className="text-gray-600">Access mentorship, resources, and networking opportunities to scale your project.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-green-500 text-4xl mb-4">
                            <BsTrophy />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Valuable Prizes</h3>
                        <p className="text-gray-600">Win cash prizes, incubation support, and investment opportunities worth $50,000.</p>
                    </div>
                </div>
            </section>

            {/* Past Winners section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Past Winners</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <img src="/api/placeholder/400/250" alt="Winner 2024" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold">EcoSmart</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">2024 Winner</span>
                            </div>
                            <p className="text-gray-600 mb-4">An AI-powered waste management solution that optimizes recycling processes.</p>
                            <button className="text-green-600 font-semibold hover:text-green-800 transition">View Project →</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <img src="/api/placeholder/400/250" alt="Winner 2023" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold">MediConnect</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">2023 Winner</span>
                            </div>
                            <p className="text-gray-600 mb-4">A telehealth platform connecting rural patients with specialized healthcare.</p>
                            <button className="text-green-600 font-semibold hover:text-green-800 transition">View Project →</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <img src="/api/placeholder/400/250" alt="Winner 2022" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold">FinLiteracy</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">2022 Winner</span>
                            </div>
                            <p className="text-gray-600 mb-4">A gamified platform teaching financial literacy to underserved communities.</p>
                            <button className="text-green-600 font-semibold hover:text-green-800 transition">View Project →</button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-200 transition">
                        View All Past Winners
                    </button>
                </div>
            </section>

            {/* Judges section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Judges</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((judge) => (
                        <div key={judge} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                                <img
                                    src={`/api/placeholder/100/100`}
                                    alt={`Judge ${judge}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Judge Name</h3>
                            <p className="text-green-600 mb-2">Position & Company</p>
                            <p className="text-gray-600 text-sm">Brief description about the judge's expertise and background.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-green-700">Who can participate?</h3>
                        <p className="text-gray-600">Students, startups, and individuals with innovative project ideas can participate. Teams can have up to 4 members.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-green-700">What types of projects are eligible?</h3>
                        <p className="text-gray-600">Projects should address real-world problems in areas like sustainability, healthcare, education, or technology.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-green-700">Is there an entry fee?</h3>
                        <p className="text-gray-600">There is no entry fee. The competition is open to all eligible participants free of charge.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-green-700">What support do participants receive?</h3>
                        <p className="text-gray-600">Shortlisted teams receive mentorship, technical resources, and networking opportunities throughout the competition.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-200 transition">
                        View Full FAQ
                    </button>
                </div>
            </section>

            {/* CTA section */}
            <section className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-8 mb-16 text-white shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Showcase Your Innovation?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join InnoVenture 2025 and take your project to the next level. Registration is open until March 10, 2025.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition">
                        Register Now
                    </button>
                    <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-600 transition">
                        Download Guidelines
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-600 border-t pt-8">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="hover:text-green-600 transition">Twitter</a>
                    <a href="#" className="hover:text-green-600 transition">LinkedIn</a>
                    <a href="#" className="hover:text-green-600 transition">Instagram</a>
                    <a href="#" className="hover:text-green-600 transition">Email</a>
                </div>
                <p className="mb-4">
                    <a href="#" className="hover:text-green-600 transition">Privacy Policy</a> |
                    <a href="#" className="hover:text-green-600 transition"> Terms of Service</a> |
                    <a href="#" className="hover:text-green-600 transition"> Contact Us</a>
                </p>
                <p className="mb-6">© 2025 InnoVenture. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProjectCompetitionPage;