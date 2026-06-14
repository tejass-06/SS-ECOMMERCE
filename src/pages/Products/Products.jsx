import './Products.css';
import { useMemo, useState } from 'react';

import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CompareProducts from '../../components/CompareProducts/CompareProducts';
import Pagination from '../../components/Pagination/Pagination';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductSort from '../../components/ProductSort/ProductSort';
import SearchBar from '../../components/SearchBar/SearchBar';
import products from '../../data/products';

const Products = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      const categoryMatch = category === 'All' || product.category === category;

      return searchMatch && categoryMatch;
    });

    if (sort === 'low') return [...nextProducts].sort((a, b) => a.price - b.price);
    if (sort === 'high') return [...nextProducts].sort((a, b) => b.price - a.price);
    if (sort === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating);

    return nextProducts;
  }, [category, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  return (
    <section className="container py-12">
      <div className="page-heading mb-10">
        <div>
          <p className="text-zinc-400 uppercase tracking-[0.35em] text-sm">Premium footwear catalog</p>
          <h1 className="text-5xl font-bold">Products</h1>
        </div>
        <p className="text-zinc-400">{filteredProducts.length} products found</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <SearchBar search={search} setSearch={handleSearch} />
        <CategoryFilter category={category} setCategory={handleCategory} />
        <ProductSort sort={sort} setSort={setSort} />
      </div>

      {visibleProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="min-h-64 grid place-items-center bg-white/10 rounded-3xl border border-white/10">
          <p className="text-zinc-400">No products matched your filters.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <CompareProducts products={products} />
    </section>
  );
};

export default Products;
