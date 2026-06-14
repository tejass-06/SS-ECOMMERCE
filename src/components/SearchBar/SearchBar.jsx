import './SearchBar.css';
const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 outline-none"
    />
  );
};

export default SearchBar;
