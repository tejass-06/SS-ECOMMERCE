import './Analytics.css';

const Analytics = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Analytics</h1>

      <div className="admin-analytics">
        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Revenue</h2>
          <p className="text-4xl font-bold">Rs. 5.2L</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Orders</h2>
          <p className="text-4xl font-bold">320</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Users</h2>
          <p className="text-4xl font-bold">1,250</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Products</h2>
          <p className="text-4xl font-bold">180</p>
        </article>
      </div>
    </section>
  );
};

export default Analytics;
