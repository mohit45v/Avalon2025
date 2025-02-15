import { Button } from "./ui/button";
import logo from "../components/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        
        {/* Left: Avalon Logo */}
        <div className="h-16 w-40 flex items-center">
          <Link to="/">
            <img src={logo} alt="Avalon Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-3 ml-auto">
          <Link to="/">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Home</Button>
          </Link>
          <Link to="/about">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">About</Button>
          </Link>
          <Link to="/domains">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Domains</Button>
          </Link>
          <Link to="/prizes">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Prizes</Button>
          </Link>
          <Link to="/sponsors">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Sponsors</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
