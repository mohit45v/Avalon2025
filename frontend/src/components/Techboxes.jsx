import React from "react";
import { HeadsetIcon as VrHeadset, Cpu, Gamepad2, ShieldCheck } from "lucide-react";

const techAreas = [
  {
    title: "AI-ML",
    subtitle: "Intelligence Evolved",
    description: "Forge the future of artificial intelligence. Build systems that think, learn, and revolutionize how machines understand our world. Explore neural networks, deep learning, and data science.",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    keyPoints: [
      "Machine Learning",
      "Neural Networks",
      "Data Science",
      "Predictive Analytics"
    ]
  },
  {
    title: "Game Dev",
    subtitle: "Worlds Unleashed",
    description: "Craft universes of unlimited potential. Design games that challenge, inspire, and redefine interactive entertainment. Learn game mechanics, level design, and interactive storytelling.",
    icon: Gamepad2,
    color: "from-blue-600 to-cyan-600",
    keyPoints: [
      "Game Mechanics",
      "Level Design",
      "Interactive Storytelling",
      "Game Physics"
    ]
  },
  {
    title: "Cyber Security",
    subtitle: "Digital Fortress",
    description: "Master the art of digital defense. Protect the future from emerging threats in an increasingly connected world. Explore network security, ethical hacking, and threat analysis.",
    icon: ShieldCheck,
    color: "from-green-600 to-emerald-600",
    keyPoints: [
      "Network Security",
      "Ethical Hacking",
      "Threat Analysis",
      "Security Protocols"
    ]
  }
];

export default function TechBoxes() {
  return (
    <section className="min-h-screen bg-[#030014] py-24 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl -top-52 -left-52 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-3xl -bottom-52 -right-52 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 animate-gradient">
              Tech Domains
            </span>
          </h2>
          <p className="text-2xl text-gray-200 font-light">
            Explore. Learn. Create. Transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {techAreas.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-orange-600/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${tech.color} transform group-hover:scale-110 
                                 transition-transform duration-500 shadow-lg`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent 
                             group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                             group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-500">
                  {tech.title}
                </h3>
                <p className="text-lg text-purple-300 mb-4">{tech.subtitle}</p>
                <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {tech.description}
                </p>

                <div className="space-y-2">
                  {tech.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-purple-400">•</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  );
}