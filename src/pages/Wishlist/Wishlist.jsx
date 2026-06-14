import { useContext } from 'react';

import WishlistCard from '../../components/WishlistCard/WishlistCard';
import { WishlistContext } from '../../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page min-h-[70vh] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Wishlist Empty</h1>
          <p className="mt-4 text-zinc-400">Save products you love.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Wishlist</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <WishlistCard key={item.id} item={item} removeFromWishlist={removeFromWishlist} />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
