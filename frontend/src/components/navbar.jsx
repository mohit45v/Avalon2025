import { Button } from "./ui/button";
import logo from "../components/logo.png"

export default function Navbar() {
    return (
        <><div >
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div className="h-16 w-40 flex items-center">
                    <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                </div>

                <div className="flex items-center gap-2">
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Home</Button>
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>About</Button>
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Domains</Button>
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Prize</Button>
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Sponsers</Button>
                    <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Register</Button>




                </div>
            </div>
        </div>

        </>
    )
}