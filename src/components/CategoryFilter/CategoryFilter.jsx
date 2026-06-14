import './CategoryFilter.css';
const CategoryFilter = ({ category, setCategory }) => {
  const categories = ['All', 'Sneakers', 'Sports', 'Casual', 'Formal'];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10"
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}{' '}
        </option>
      ))}{' '}
    </select>
  );
};

export default CategoryFilter;
