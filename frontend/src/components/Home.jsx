import * as React from "react";
import { Progress } from "@/components/ui/progress";
import About from "./About";
import Navbar from "./navbar";
import Timeline from "./Timeline";
import Domain from "./Domains";
import video from "./bgvd.mp4";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-20">
          <About />
          <Domain />
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Home;

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
