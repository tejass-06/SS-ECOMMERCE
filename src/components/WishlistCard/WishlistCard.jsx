import { FaHeart } from 'react-icons/fa';
import './WishlistCard.css';

const WishlistCard = ({ item, removeFromWishlist }) => {
  return (
    <div className="wishlist-card bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
      <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-zinc-400 mt-2">{item.brand}</p>
        <p className="text-2xl font-bold mt-4">Rs. {item.price}</p>

        <button
          onClick={() => removeFromWishlist(item.id)}
          className="mt-5 flex items-center gap-2 text-red-500"
        >
          <FaHeart />
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
