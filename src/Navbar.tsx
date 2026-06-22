import './Navbar.css';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Balaji" height={50} />

      <ul>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Free Quote</button>
    </nav>
  );
}

export default Navbar;