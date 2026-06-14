import products from '../data/products';
import './ProductsAdmin.css';

const ProductsAdmin = () => {
  return (
    <section className="products-admin p-10">
      <h1 className="text-5xl font-bold mb-8">Manage Products</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>Rs. {product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductsAdmin;
