import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1400',
  'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1400',
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1400',
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${images[current]})`
      }}
    >
      {/* Content */}
      <div className="max-w-xl text-center flex flex-col items-center">
        <h1 className="text-white text-[40px] font-light leading-snug mb-5 text-center">
          Your trusted partner in premium plywood and door manufacturing.
        </h1>
        <p className="text-white text-base mb-8 opacity-80">
          Whether you're building a home, designing interiors, or managing a large-scale construction project.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#e8442a] text-white px-7 py-3 rounded-full text-base cursor-pointer shadow-lg">
            Shop Now
          </button>
          <button
            className="text-white px-7 py-3 rounded-full text-base cursor-pointer"
            style={{backgroundColor: 'rgb(48,48,48)', boxShadow: '0px 4px 15px rgb(42,42,42)'}}>
            View Product Catalog
          </button>
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 text-white px-4 py-3 rounded-full text-xl cursor-pointer hover:bg-white/40 transition-all">
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 text-white px-4 py-3 rounded-full text-xl cursor-pointer hover:bg-white/40 transition-all">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index === current ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;