import './ProductDetails.css';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import RecommendedProducts from '../../components/RecommendedProducts/RecommendedProducts';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import products from '../../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!product) return;

    const recent = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const next = [product, ...recent.filter((item) => item.id !== product.id)].slice(0, 4);
    localStorage.setItem('recentlyViewed', JSON.stringify(next));
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success('Added to cart');
  };

  const handleWishlist = () => {
    addToWishlist(product);
    toast.success('Saved to wishlist');
  };

  return (
    <section className="container py-12">
      <div className="page-heading mb-10">
        <p className="text-zinc-400 uppercase tracking-[0.35em] text-sm">Premium detail view</p>
        <h1 className="text-5xl font-bold">{product.name}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="section-panel p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-[2rem] object-cover shadow-2xl"
          />
        </div>

        <div className="section-panel p-8 space-y-6">
          <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">{product.category}</span>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-zinc-400">Brand: {product.brand}</p>
            <p className="text-zinc-400">Stock: {product.stock} available</p>
          </div>
          <div>
            <span className="text-4xl font-bold">Rs. {product.price}</span>
          </div>
          <p className="text-zinc-300 leading-7">{product.description}</p>

          <div>
            <h3 className="font-semibold text-xl mb-3">Specifications</h3>
            <ul className="space-y-2 text-zinc-300">
              {product.specifications.map((spec) => (
                <li key={spec}>- {spec}</li>
              ))}
            </ul>
          </div>

          <div>
            <QuantitySelector
              quantity={quantity}
              increase={() => setQuantity(quantity + 1)}
              decrease={() => setQuantity(Math.max(quantity - 1, 1))}
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button onClick={handleAddToCart} className="btn primary">
              Add To Cart
            </button>
            <Link to="/buy-now" state={{ ...product, quantity }} className="btn">
              Buy Now
            </Link>
            <button onClick={handleWishlist} className="btn">
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <ReviewSection productId={product.id} />
      <RecommendedProducts currentId={product.id} />
    </section>
  );
};

export default ProductDetails;
