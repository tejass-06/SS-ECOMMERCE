import { useLocation } from 'react-router-dom';
import './BuyNow.css';

const BuyNow = () => {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <div className="min-h-screen flex justify-center items-center">Product Not Found</div>;
  }

  return (
    <section className="buy-now-page max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-8">Buy Now</h1>

      <article className="bg-white/10 rounded-3xl p-6">
        <img src={product.image} alt={product.name} className="w-64 rounded-2xl" />
        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-2xl mt-3">Rs. {product.price}</p>
        <button className="btn primary mt-6">Continue To Payment</button>
      </article>
    </section>
  );
};

export default BuyNow;
