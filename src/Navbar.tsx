import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1e1e1e] fixed top-0 w-full z-50">
      <img src={logo} alt="Balaji" className="h-10" />

      <ul className="flex list-none gap-8 ml-auto mr-8">
        <li className="text-white text-base cursor-pointer">Products</li>
        <li className="text-white text-base cursor-pointer">About</li>
        <li className="text-white text-base cursor-pointer">Contact</li>
      </ul>

      <button className="bg-[#e8442a] text-white px-5 py-2 rounded-full text-base cursor-pointer shadow-lg">
        Free Quote
      </button>
    </nav>
  );
}

export default Navbar;