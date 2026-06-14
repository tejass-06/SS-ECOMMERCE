import ProductCard from '../../components/ProductCard/ProductCard';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import Newsletter from '../../components/Newsletter/Newsletter';
import products from '../../data/products';
import Hero from '../../components/Hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="container py-16">
        <div className="page-heading mb-12">
          <p className="text-zinc-400 uppercase tracking-[0.35em] text-sm">Curated luxury picks</p>
          <h2 className="text-4xl font-bold">Featured Products</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <RecentlyViewed />
        <div className="mt-16">
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default Home;
