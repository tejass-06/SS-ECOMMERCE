import './ProductSort.css';

const ProductSort = ({ sort, setSort }) => {
  return (
    <select
      value={sort}
      onChange={(event) => setSort(event.target.value)}
      className="product-sort p-4 rounded-xl bg-white/10 border border-white/10"
    >
      <option value="">Sort By</option>
      <option value="low">Price Low To High</option>
      <option value="high">Price High To Low</option>
      <option value="rating">Top Rated</option>
    </select>
  );
};

export default ProductSort;
