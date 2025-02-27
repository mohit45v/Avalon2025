

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RulesPage() {
    const [activeTab, setActiveTab] = useState('rules');

    const rules = [
        "Teams must have exactly 4 members for the hackathon.",
        "All team members must be currently enrolled students.",
        "Use of AI tools must be disclosed in project documentation.",
        "Projects must be original work created during the hackathon.",
        "Code plagiarism will result in immediate disqualification."
    ];

    const faqs = [
        {
            question: "What is the registration deadline?",
            answer: "Registration closes 48 hours before the event starts."
        },
        {
            question: "Can I participate remotely?",
            answer: "No, this is an in-person only hackathon."
        },
        {
            question: "Are pre-built projects allowed?",
            answer: "No, all projects must be built from scratch during the event."
        },
        {
            question: "What should I bring?",
            answer: "Laptop, charger, student ID, and any personal items you need."
        }
    ];

    return (
        <section className="relative min-h-screen bg-[#030014] py-20 px-4 md:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12 space-x-4">
                    <button
                        onClick={() => setActiveTab('rules')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'rules' ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white' : 'bg-white/10 text-gray-400'}`}
                    >
                        Rules
                    </button>
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'faq' ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white' : 'bg-white/10 text-gray-400'}`}
                    >
                        FAQ
                    </button>
                </div>

                {/* Rules Section */}
                {activeTab === 'rules' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                            Event Rules & Guidelines
                        </h2>
                        <div className="space-y-4">
                            {rules.map((rule, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 glass-effect rounded-xl hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <p className="text-gray-200">
                                        <span className="text-purple-400 font-semibold">Rule {index + 1}:</span> {rule}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* FAQ Section */}
                {activeTab === 'faq' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 glass-effect rounded-xl hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-300">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
