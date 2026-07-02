import doors from './assets/doors.png';

function Expertise() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-4">
        Expertise & <span className="text-[#e8442a]">Experience</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      {/* Big banner */}
      <div className="relative flex items-end mb-12 min-h-[500px]">
        
        {/* Text on left */}
        <div className="w-1/2 pb-8 z-10" data-aos="fade-right">
          <h3 className="text-6xl font-bold text-[#8B6914] mb-2">Years of Craftsmanship.</h3>
          <h3 className="text-8xl font-black text-black">Built on</h3>
          <h3 className="text-8xl font-black text-black">Trust.</h3>
        </div>

        {/* Doors image on right */}
        <div className="absolute right-0 bottom-0 w-3/4" data-aos="fade-left">
          <img src={doors} alt="Doors" className="w-full object-contain object-bottom" />
        </div>
      </div>

      {/* Two paragraphs */}
      <p className="text-gray-600 mb-4 text-2xl leading-relaxed font-normal">
        With years of experience in plywood and door manufacturing, Balaji Plywood has developed deep expertise in creating wood solutions that deliver strength, durability, and refined finishes. Our knowledge of materials, modern manufacturing techniques, and quality processes allows us to consistently produce products that meet the expectations of homeowners, architects, and professionals.
      </p>
      <p className="text-gray-600 text-2xl leading-relaxed font-normal">
        From selecting premium raw materials to precision manufacturing and final quality checks, every step reflects our commitment to excellence.
      </p>
    </section>
  );
}

export default Expertise;