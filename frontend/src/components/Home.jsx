import * as React from "react";
import { ReactTyped } from "react-typed";
import { Progress } from "@/components/ui/progress";
import logo from "../components/logo.png";




const Home = () => {
  return (
    <div className="relative z-0 flex flex-col items-center justify-center min-h-screen bg-black">

      {/* Background: 3D Robot Animation */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-d5e503f9b1f0c60091f2def7ac1c4b3a/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      ></iframe>

      {/* Foreground Content (Text Above Robot) */}
      <div className="absolute top-10 left-0 right-0  flex flex-col items-center justify-start text-center z-10 " >
        {/* Logo at the top */}
        <div className="h-14 w-24 flex items-center justify-center mb-0.5 mt-0">
          <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
        </div>

        {/* TECHFEST text with robotic font */}
        <p className="font-[Orbitron], sans-serif text-purple-600  text-xl sm:text-4xl font-semibold mb-0.5 mt-0">
        𝕋𝔼ℂℍ𝔽𝔼𝕊𝕋
        </p>


        {/* Heading with animated text */}
        <h1 className="relative text-white text-xl sm:text-3xl lg:text-4xl font-bold z-10 whitespace-nowrap font-serif">
          Welcome to{" "}
          <span className="text-orange-500">
            <ReactTyped
              strings={["𝕥𝕙𝕖 𝕣𝕖𝕒𝕝𝕞 𝕠𝕗 𝕥𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕪"]}
              typeSpeed={100}
              loop
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;



// Progress Bar Component
export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="w-[60%] sm:w-[40%] relative mt-4 z-10"
    />
  );
}



