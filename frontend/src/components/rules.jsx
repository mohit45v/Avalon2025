

export default function RulesPage() {
    console.log("RulesPage Rendered");
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black p-6 row-span-3">
            {/* Rule Items with Spacing */}
            <div className="p-4 w-80 bg-gray-800 text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 mb-4">
                Rule 3: Atlest ateam should have 4 members for hackathon .
            </div>

            <div className="p-4 w-80 bg-gray-800 text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 mb-4">
                Rule 3: Respect all players.
            </div>

            <div className="p-4 w-80 bg-gray-800 text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 mb-4">
                Rule 3: Respect all players.
            </div>

            <div className="p-4 w-80 bg-gray-800 text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 mb-4">
                Rule 3: Respect all players.
            </div>

            <div className="p-4 w-80 bg-gray-800 text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
                Rule 3: Respect all players.
            </div>
        </div>
    );
}
