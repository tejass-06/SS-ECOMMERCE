import './Navbar.css';
import { useContext, useState } from 'react';
import { FaBars, FaHeart, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-3xl font-bold">
            LUXESTEP
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/wishlist" aria-label="Wishlist" className="relative">
              <FaHeart />
              {wishlist.length > 0 && <span className="nav-count">{wishlist.length}</span>}
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative">
              <FaShoppingCart />
              {cartCount > 0 && <span className="nav-count">{cartCount}</span>}
            </Link>
            {user ? (
              <button onClick={logout} aria-label="Logout" title={user.email}>
                <FaSignOutAlt />
              </button>
            ) : (
              <Link to="/login" aria-label="Login">
                <FaUser />
              </Link>
            )}
            <button onClick={() => setIsOpen(true)} className="md:hidden" aria-label="Open menu">
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
