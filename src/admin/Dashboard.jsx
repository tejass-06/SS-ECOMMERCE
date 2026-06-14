import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="admin-dashboard max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Total Orders</h2>
          <p className="text-4xl font-bold">125</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Revenue</h2>
          <p className="text-4xl font-bold">Rs. 2.5L</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Products</h2>
          <p className="text-4xl font-bold">85</p>
        </article>

        <article className="bg-white/10 rounded-3xl p-6">
          <h2>Users</h2>
          <p className="text-4xl font-bold">540</p>
        </article>
      </div>
    </section>
  );
};

export default Dashboard;
