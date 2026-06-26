import logo from './assets/room.jpg';

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${logo})`
      }}
    >
      <div className="max-w-xl text-center flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold mb-5">
          Your trusted partner in premium plywood and door manufacturing.
        </h1>
        <p className="text-white text-base mb-8 opacity-80">
          Whether you're building a home, designing interiors, or managing a large-scale construction project.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#e8442a] text-white px-7 py-3 rounded-full text-base cursor-pointer shadow-lg">
            Shop Now
          </button>
          <button className="bg-black/40 text-white border-2 border-white/30 px-7 py-3 rounded-full text-base cursor-pointer shadow-lg">
            View Product Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;