import './ProductCard.css';
import { useContext } from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart');
  };

  const handleWishlist = () => {
    addToWishlist(product);
    toast.success('Saved to wishlist');
  };

  return (
    <div className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
      </Link>

      <div className="p-5">
        <div className="flex justify-between gap-4">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </Link>
          <button onClick={handleWishlist} aria-label="Add to wishlist">
            <FaHeart />
          </button>
        </div>

        <p className="text-zinc-400 mt-2">{product.brand}</p>

        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-zinc-500">/ 5</span>
        </div>

        <p className="text-2xl font-bold mt-4">Rs. {product.price}</p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            onClick={handleAddToCart}
            className="btn primary flex justify-center items-center gap-2"
          >
            <FaShoppingCart />
            Cart
          </button>
          <Link to="/buy-now" state={product} className="btn flex justify-center items-center">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
