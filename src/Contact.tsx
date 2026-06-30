import logo from './assets/logo.png';

function Contact() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Contact <span className="text-[#e8442a]">Us</span>
      </h2>

      <div className="flex gap-8 border border-gray-300 rounded-xl p-8 w-1/2">
        {/* Left side */}
        <div className="bg-gray-200 rounded-xl p-8 w-1/3">
          <p className="text-lg mb-4">Get In Touch With Us</p>
          <img src={logo} alt="Balaji" className="h-20 mb-4 mx-auto" />
          <p className="mb-2">Shivraj-6, Kapilvastu, Nepal</p>
          <p className="mb-2">9857028306 | 9857028388</p>
          <p className="mb-2">www.balajiplywoodnepal.com</p>
          <p className="mb-2">info@balajiplywoodnepal.com</p>
          <p>balajiplywoodnepal@gmail.com</p>
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