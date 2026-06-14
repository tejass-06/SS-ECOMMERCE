import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-menu fixed inset-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="w-72 h-full bg-zinc-950 border-r border-white/10 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">LUXESTEP</h2>
          <button onClick={closeMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/wishlist" onClick={closeMenu}>
            Wishlist
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            Cart
          </Link>
          <Link to="/orders" onClick={closeMenu}>
            Orders
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
