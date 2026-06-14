import products from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './RecommendedProducts.css';

const RecommendedProducts = ({ currentId }) => {
  const recommendations = products.filter((item) => item.id !== currentId).slice(0, 4);

  return (
    <div className="recommended-products mt-20">
      <h2 className="text-4xl font-bold mb-8">Recommended For You</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
