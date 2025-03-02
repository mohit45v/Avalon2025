import React from "react";
import { HeadsetIcon as VrHeadset, Cpu, Gamepad2, ShieldCheck } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const techAreas = [
  {
    title: "AR/VR",
    subtitle: "Reality Redefined",
    description: "Push the boundaries between real and virtual. Create immersive experiences that transform how we perceive and interact with digital worlds.",
    icon: VrHeadset,
    color: "from-purple-600 to-fuchsia-600",
    entryFee: "₹499",
    participants: "100+",
    difficulty: "Advanced",
    includes: [
      "Full-day workshop",
      "Hands-on experience",
      "Certificate of completion",
      "Project guidance"
    ]
  },
  {
    title: "AI-ML",
    subtitle: "Intelligence Evolved",
    description: "Forge the future of artificial intelligence. Build systems that think, learn, and revolutionize how machines understand our world.",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    entryFee: "₹499",
    participants: "150+",
    difficulty: "Expert",
    includes: [
      "Full-day workshop",
      "Dataset access",
      "Certificate of completion",
      "Project guidance"
    ]
  },
  {
    title: "Game Dev",
    subtitle: "Worlds Unleashed",
    description: "Craft universes of unlimited potential. Design games that challenge, inspire, and redefine interactive entertainment.",
    icon: Gamepad2,
    color: "from-blue-600 to-cyan-600",
    entryFee: "₹499",
    participants: "120+",
    difficulty: "Intermediate",
    includes: [
      "Full-day workshop",
      "Game engine basics",
      "Certificate of completion",
      "Project guidance"
    ]
  },
  {
    title: "Cyber Security",
    subtitle: "Digital Fortress",
    description: "Master the art of digital defense. Protect the future from emerging threats in an increasingly connected world.",
    icon: ShieldCheck,
    color: "from-green-600 to-emerald-600",
    entryFee: "₹499",
    participants: "80+",
    difficulty: "Expert",
    includes: [
      "Full-day workshop",
      "Security tools access",
      "Certificate of completion",
      "Project guidance"
    ]
  }
];

export default function TechBoxes() {
  const navigate = useNavigate();

  const handleRegister = (tech) => {
    Swal.fire({
      title: `${tech.title} Workshop Registration`,
      html: `
        <div class="space-y-6 text-left p-4">
          <div class="mb-6 bg-purple-900/20 p-4 rounded-lg">
            <p class="text-xl font-bold text-purple-400 mb-4">Workshop Details</p>
            <div class="space-y-2">
              <p class="text-2xl font-bold text-gradient">${tech.entryFee}</p>
              <p class="flex items-center gap-2">
                <span class="text-purple-400">👥</span> ${tech.participants} Expected Participants
              </p>
              <p class="flex items-center gap-2">
                <span class="text-purple-400">📊</span> ${tech.difficulty} Level
              </p>
            </div>
          </div>
          
          <div class="bg-purple-900/20 p-4 rounded-lg">
            <p class="text-xl font-bold text-purple-400 mb-4">What's Included</p>
            <ul class="space-y-2">
              ${tech.includes.map(item => `
                <li class="flex items-center gap-2">
                  <span class="text-purple-400">✓</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="bg-purple-900/20 p-4 rounded-lg">
            <p class="text-xl font-bold text-purple-400 mb-4">Description</p>
            <p class="leading-relaxed">${tech.description}</p>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Register Now',
      cancelButtonText: 'Cancel',
      customClass: {
        container: 'tech-modal',
        popup: 'bg-gray-900 text-white border border-purple-500/20 rounded-2xl',
        title: 'text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400',
        htmlContainer: 'text-gray-300',
        confirmButton: 'bg-gradient-to-r from-purple-600 to-orange-600 text-white px-6 py-3 rounded-lg font-bold transform transition hover:scale-105',
        cancelButton: 'bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-gray-700'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/register', { 
          state: { 
            workshop: tech.title,
            fee: tech.entryFee,
            includes: tech.includes,
            difficulty: tech.difficulty
          }
        });
      }
    });
  };

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
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${tech.color} transform group-hover:scale-110 
                                 transition-transform duration-500 shadow-lg`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`text-sm font-semibold px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm
                    ${tech.difficulty === 'Expert' ? 'text-red-400' : 
                      tech.difficulty === 'Advanced' ? 'text-orange-400' : 'text-green-400'}
                    transform group-hover:-translate-y-1 transition-transform duration-500`}>
                    {tech.difficulty}
                  </span>
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

                <div className="flex items-center justify-between mb-6">
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                    <p className="text-sm text-gray-400">Entry Fee</p>
                    <p className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-500">
                      {tech.entryFee}
                    </p>
                  </div>
                  <div className="text-right transform group-hover:-translate-y-1 transition-transform duration-500">
                    <p className="text-sm text-gray-400">Participants</p>
                    <p className="text-xl text-white font-medium group-hover:text-orange-400 transition-colors duration-500">
                      {tech.participants}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRegister(tech)}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 
                           text-white font-semibold transform transition-all duration-500
                           hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                           active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .tech-modal .swal2-popup {
          background: rgba(26, 26, 46, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 1rem;
        }
        .tech-modal .swal2-title {
          color: #a78bfa;
        }
        .tech-modal .swal2-html-container {
          color: #e5e7eb;
        }
        .tech-modal .swal2-confirm {
          background: linear-gradient(to right, #9333ea, #ea580c) !important;
          transition: all 0.3s ease;
        }
        .tech-modal .swal2-confirm:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }
        .tech-modal .swal2-cancel {
          background: #1f2937 !important;
          transition: all 0.3s ease;
        }
        .tech-modal .swal2-cancel:hover {
          background: #374151 !important;
        }
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