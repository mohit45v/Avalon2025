const prizes = [
    {
      title: "First Prize",
      amount: "$3000",
      image: "https://em-content.zobj.net/thumbs/120/apple/325/trophy_1f3c6.png", // Trophy Emoji
    },
    {
      title: "Second Prize",
      amount: "$2000",
      image: "https://em-content.zobj.net/thumbs/120/apple/325/trophy_1f3c6.png", // Trophy Emoji
    },
    {
      title: "Third Prize",
      amount: "$1000",
      image: "https://em-content.zobj.net/thumbs/120/apple/325/trophy_1f3c6.png", // Trophy Emoji
    },
  ];
  
  const Prizes = () => {
    return (
      <div className="min-h-screen bg-black text-white py-20 px-8 font-sans flex flex-col items-center">
        <h2 className="text-5xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-12">
          Prizes
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
              <img src={prize.image} alt={prize.title} className="w-32 h-32 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">{prize.title}</h3>
              <p className="text-2xl text-gray-300">{prize.amount}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Prizes;
  