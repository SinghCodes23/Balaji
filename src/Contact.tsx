import logo from './assets/logo.png';
import { MapPin, Phone, Globe, Info, Mail } from 'lucide-react';

function Contact() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-4">
        Contact <span className="text-[#e8442a]">Us</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 border border-gray-300 rounded-xl p-8 shadow-sm w-3/4 mx-auto">
        {/* Left side */}
        <div className="bg-gray-200 rounded-xl p-8 w-full md:w-1/3">
          <p className="text-lg mb-4">Get In Touch With Us</p>
          <img src={logo} alt="Balaji" className="h-28 mb-4 mx-auto" />

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-black text-white p-2 rounded-full">
              <MapPin size={16} />
            </span>
            <p>Shivraj-6, Kapilvastu, Nepal</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-black text-white p-2 rounded-full">
              <Phone size={16} />
            </span>
            <p>9857028306 | 9857028388</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-black text-white p-2 rounded-full">
              <Globe size={16} />
            </span>
            <p className="break-all">www.balajiplywoodnepal.com</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-black text-white p-2 rounded-full">
              <Info size={16} />
            </span>
            <p className="break-all">info@balajiplywoodnepal.com</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-black text-white p-2 rounded-full">
              <Mail size={16} />
            </span>
            <p className="break-all">balajiplywoodnepal@gmail.com</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6 w-2/3">
          <div className="flex gap-6">
            <input type="text" placeholder="First Name" className="border-b border-gray-400 w-1/2 pb-2 outline-none" />
            <input type="text" placeholder="Last Name" className="border-b border-gray-400 w-1/2 pb-2 outline-none" />
          </div>
          <div className="flex gap-6">
            <input type="email" placeholder="Email" className="border-b border-gray-400 w-1/2 pb-2 outline-none" />
            <input type="text" placeholder="Phone Number" className="border-b border-gray-400 w-1/2 pb-2 outline-none" />
          </div>
          <textarea placeholder="Write your message.." className="border-b border-gray-400 pb-2 outline-none"></textarea>
          <button className="bg-black text-white px-6 py-3 rounded-lg w-fit self-end">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;