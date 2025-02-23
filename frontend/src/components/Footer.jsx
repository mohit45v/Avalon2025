

import { useState } from "react";

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

export default function HackathonFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col items-center px-4 py-8">
      <h1 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-6 glitch">Hackathon FAQ</h1>
      <div className="max-w-4xl w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left bg-cyan-600 hover:bg-cyan-700 p-3 rounded-lg text-lg font-bold relative"
            >
              {faq.question}
              <span className="absolute right-4">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <p className="bg-cyan-800 p-3 mt-2 rounded-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <section className="mt-12 text-center">
        <h1 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-cyan-400 text-2xl mb-2">{contact.title}</h2>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 w-full max-w-4xl h-80 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            src="https://www.google.com/maps?q=Terna+Engineering+College,Nerul&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
