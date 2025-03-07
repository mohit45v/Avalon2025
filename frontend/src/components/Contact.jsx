import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PiThreadsLogoFill } from 'react-icons/pi';

const contacts = [
  { title: "Technical Queries", name: "Sarthak Pawar", position: "Secretary", phone: "+91 9870308347", email: "avalon@ternaengg.ac.in" },
  { title: "Other Queries", name: "Afraz Khan", position: "Deputy Secretary", phone: "+91 9987866977", email: "avalon@ternaengg.ac.in" },
  { title: "Address", phone: "Terna Engineering College, Nerul, Navi Mumbai, India", email: "avalon@ternaengg.ac.in" },
];

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({ show: false, isSuccess: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/queries/submit`, formData);
      setSubmitStatus({ show: true, isSuccess: true });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus({ show: false, isSuccess: false }), 3000);
    } catch (error) {
      setSubmitStatus({ show: true, isSuccess: false });
      setTimeout(() => setSubmitStatus({ show: false, isSuccess: false }), 3000);
    }
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/avalonterna",
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    {
      icon: FaTwitter,
      url: "https://x.com/avalon_tec",
      color: "hover:text-blue-400",
      label: "Twitter"
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@avalontechfest8898",
      color: "hover:text-red-600",
      label: "YouTube"
    },
    {
      icon: PiThreadsLogoFill,
      url: "https://www.threads.net/@avalonterna",
      color: "hover:text-gray-200",
      label: "Threads"
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="py-20 text-center bg-[#030014] relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20" />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
            Contact Us
          </span>
        </h2>

        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:border-purple-500/50 text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:border-purple-500/50 text-white"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:border-purple-500/50 text-white"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {submitStatus.show && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg ${
                submitStatus.isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
              }`}
            >
              {submitStatus.isSuccess ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
              {contact.name && (
                <>
                  <p className="text-gray-200 font-medium mb-1">{contact.name}</p>
                  <p className="text-purple-400 text-sm mb-2">{contact.position}</p>
                </>
              )}
              <p className="text-gray-400">{contact.phone}</p>
              <p className="text-gray-400">{contact.email}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="my-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Connect With Us
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg bg-white/10 border border-purple-500/30 
                          backdrop-blur-sm transition-all duration-300
                          hover:bg-white/20 hover:border-purple-500/60 
                          group ${social.color}`}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="rounded-xl overflow-hidden border border-purple-500/20">
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.908227746073!2d73.0215266!3d19.0349448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xf0562c8c4ee11853!2sTerna%20Engineering%20College!5e0!3m2!1sen!2sin!4v1707835671799!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

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
      </div>
    </motion.section>
  );
};

export default Contact;