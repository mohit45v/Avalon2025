

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Contact from "./Contact";

const faqs = [
  { question: "What is the Hackathon?", answer: "A hackathon is a collaborative programming event where participants develop innovative projects within a limited time." },
  { question: "Who can participate?", answer: "Anyone with a passion for technology, coding, and problem-solving can participate." },
  { question: "Do I need a team?", answer: "You can join as an individual or form a team with up to 4 members." },
  { question: "What is the registration fee?", answer: "The registration is completely free." },
  { question: "What are the prizes?", answer: "Exciting cash prizes, internships, and swag for top teams." },
  { question: "What should I bring?", answer: "Bring your laptop, charger, and any hardware you plan to use." },
  { question: "Are there any specific themes?", answer: "Themes will be announced at the start of the event." },
  { question: "Will food be provided?", answer: "Yes, meals and snacks will be provided throughout the event." },
  { question: "How do I register?", answer: "Visit our official website and complete the registration form." },
  { question: "Can I use third-party APIs?", answer: "Yes, you are encouraged to use open-source tools and APIs." },
];

const contacts = [
  { title: "Technical Queries", phone: "+123 456 7890", email: "techsupport@hackathon.com" },
  { title: "Other Queries", phone: "+987 654 3210", email: "info@hackathon.com" },
  { title: "Address", phone: "Terna Engineering College, Nerul, Navi Mumbai, India", email: "info@hackathon.com" },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <footer ref={ref} className="relative bg-[#030014] text-gray-300 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* FAQs section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Frequently Asked Questions
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-purple-500/20 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <span className="text-purple-400 transition-transform duration-300 transform">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-300 text-sm">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact section */}
        <Contact inView={inView} />

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© 2024 Avalon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
