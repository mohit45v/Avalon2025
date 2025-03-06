import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PiThreadsLogoFill } from 'react-icons/pi';
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

  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://instagram.com/avalon2025",
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/avalon2025",
      color: "hover:text-blue-400",
      label: "Twitter"
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/company/avalon2025",
      color: "hover:text-blue-600",
      label: "LinkedIn"
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/avalon2025",
      color: "hover:text-red-600",
      label: "YouTube"
    },
    {
      icon: PiThreadsLogoFill,
      url: "https://threads.net/avalon2025",
      color: "hover:text-gray-200",
      label: "Threads"
    },
  ];

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

        {/* Social Media and Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-20 border-t border-purple-500/20 pt-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20"
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">{contact.title}</h3>
                  <p className="text-gray-400">{contact.phone}</p>
                  <p className="text-gray-400">{contact.email}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
                Connect With Us
              </h3>
              <div className="flex justify-center items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-white/5 border border-purple-500/20 
                              backdrop-blur-sm transition-all duration-300
                              hover:bg-white/10 hover:border-purple-500/40 
                              group ${social.color}`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center text-sm text-gray-500"
            >
              <p>© 2025 Avalon. All rights reserved.</p>
              <p className="mt-2">
                Designed with ❤️ by Team Avalon
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
