import { Button } from "./ui/button";
import logo from "../components/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react"

export default function Navbar() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-16">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl h-16">
        {/* Logo */}
        <div className="h-14 w-24 flex items-center">
          <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
        </div>

        {/* Navigation buttons (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-3">
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">Home</Button>
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">About</Button>
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">Domains</Button>
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">Prize</Button>
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">Sponsors</Button>
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] px-4 py-2">Contact</Button>
        </div>

        {/* "More" button (visible only on mobile) */}
        <div className="flex sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" bg-black text-white px-4 py-2">More  <ChevronRight /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Prize
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Timeline
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Events
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Contact
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
