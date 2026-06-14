import { useState } from 'react';
import './CompareProducts.css';

const CompareProducts = ({ products = [] }) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const product1 = products.find((product) => product.id === Number(first));
  const product2 = products.find((product) => product.id === Number(second));

  return (
    <section className="compare-products mt-20 p-6">
      <h2 className="text-4xl font-bold mb-8">Compare Products</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          value={first}
          onChange={(event) => setFirst(event.target.value)}
          className="p-4 rounded-xl bg-zinc-900"
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        <select
          value={second}
          onChange={(event) => setSecond(event.target.value)}
          className="p-4 rounded-xl bg-zinc-900"
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {product1 && product2 && (
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[product1, product2].map((product) => (
            <div key={product.id} className="bg-white/10 p-6 rounded-3xl">
              <h3>{product.name}</h3>
              <p>Rs. {product.price}</p>
              <p>{product.brand}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CompareProducts;
