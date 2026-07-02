import { Shield, Users, Clock } from 'lucide-react';

function About() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-4">
        About <span className="text-[#e8442a]">Us</span>
        <span className="flex-1 h-px bg-gray-300"></span>
        <a className="text-[#e8442a] text-sm cursor-pointer">View Page</a>
      </h2>

      
      <div className="flex gap-8 mb-8">
        <img
          src="src/assets/plywood.png"
          alt="About Balaji"
          className="w-1/2 h-120 rounded-xl object-cover"
        />

        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-4 leading-snug">
            Crafting Strength. <span className="text-[#e8442a]">Building Trust.</span>
            </h3>
          <p className="text-gray-600 mb-4 text-2xl leading-relaxed">
            Balaji Plywood is a leading manufacturer of high-quality plywood and doors, dedicated to excellence in every product we create. Our manufacturing process combines advanced technology, stringent quality control, and carefully selected raw materials to ensure superior strength, durability, and finish.
          </p>
          <p className="text-gray-600 text-2xl leading-relaxed">
            Over the years, we have built a reputation for delivering products that architects, contractors, interior designers, and homeowners can trust.
          </p>
        </div>
      </div>

      {/* Bottom part - three feature boxes */}
      <div className="flex gap-6">
        <div className="flex gap-3 w-1/3 border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-[#e8442a] text-white p-2 rounded-lg h-fit">
            <Shield size={16} />
          </span>
          <div>
            <p className="font-semibold mb-1">Premium Quality</p>
            <p className="text-gray-500 text-sm">Delivering durable plywood and doors manufactured to the highest standards.</p>
          </div>
        </div>

        <div className="flex gap-3 w-1/3 border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-[#e8442a] text-white p-2 rounded-lg h-fit">
            <Users size={16} />
          </span>
          <div>
            <p className="font-semibold mb-1">Customer First</p>
            <p className="text-gray-500 text-sm">Building lasting relationships through reliable service, transparency, and support.</p>
          </div>
        </div>

        <div className="flex gap-3 w-1/3 border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-[#e8442a] text-white p-2 rounded-lg h-fit">
            <Clock size={16} />
          </span>
          <div>
            <p className="font-semibold mb-1">Timely Delivery</p>
            <p className="text-gray-500 text-sm">Ensuring consistent production and on-time delivery for every project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;