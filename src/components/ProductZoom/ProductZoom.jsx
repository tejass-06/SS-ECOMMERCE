import './ProductZoom.css';

const ProductZoom = ({ image }) => {
  if (!image) return null;

  return (
    <div className="product-zoom overflow-hidden rounded-3xl">
      <img
        src={image}
        alt="Zoomable product"
        className="hover:scale-125 transition duration-700 cursor-zoom-in"
      />
    </div>
  );
};

export default ProductZoom;
