import './RecentlyViewed.css';

const RecentlyViewed = () => {
  const items = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

  if (!items.length) return null;

  return (
    <div className="recently-viewed mt-20">
      <h2 className="text-4xl font-bold mb-8">Recently Viewed</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white/10 rounded-3xl overflow-hidden">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
