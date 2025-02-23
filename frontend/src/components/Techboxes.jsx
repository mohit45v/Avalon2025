import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, HeadsetIcon as VrHeadset, Gamepad2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const techAreas = [
  {
    title: "AR/VR",
    description:
      "Immerse yourself in the world of Augmented and Virtual Reality. Learn to create 3D environments, develop AR applications, and design VR experiences that push the boundaries of reality.",
    icon: VrHeadset,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "AI-ML",
    description:
      "Explore the cutting-edge of Artificial Intelligence and Machine Learning. Develop intelligent systems, work with neural networks, and learn to implement advanced algorithms that power the future of technology.",
    icon: Cpu,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Game Development",
    description:
      "Turn your passion for gaming into a career. Master game engines, learn about game design principles, and create captivating gameplay mechanics that engage players across various platforms.",
    icon: Gamepad2,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Cybersecurity",
    description:
      "Become a guardian of the digital realm. Learn about network security, ethical hacking, cryptography, and develop the skills to protect organizations from cyber threats in an increasingly connected world.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
];

export default function TechBoxes() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 relative bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-4 glitch" data-text="Explore Our Technology Programs">
        Explore Our Technology Programs
      </h2>
      <p className="text-center text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Dive into the forefront of technology with our cutting-edge programs. Prepare for the future and shape the
        digital landscape with hands-on learning experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techAreas.map((area, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden bg-gray-900">
            <div className={`h-2 bg-gradient-to-r ${area.color}`} />
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <area.icon className={`h-6 w-6 bg-gradient-to-r ${area.color} text-white rounded-full p-1`} />
                <span>{area.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{area.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-gray-400 text-gray-400 hover:text-white" onClick={() => setSelectedTech(area)}>
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedTech && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-center border border-gray-600">
            <h3 className="text-xl font-bold mb-2">{selectedTech.title}</h3>
            <p className="text-gray-400 mb-4">{selectedTech.description}</p>
            <Button className="mt-4 bg-red-600 hover:bg-red-700" onClick={() => setSelectedTech(null)}>
              Close
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
