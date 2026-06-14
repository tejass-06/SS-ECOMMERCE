import { Link } from 'react-router-dom';

import { getOrders } from '../../services/orderService';
import './Orders.css';

const Orders = () => {
  const orders = getOrders();

  if (!orders.length) {
    return (
      <section className="orders-page min-h-[70vh] flex justify-center items-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">No Orders Yet</h1>
          <p className="mt-4 text-zinc-400">Your placed orders will appear here.</p>
          <Link to="/products" className="btn primary inline-block mt-6">
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="orders-page max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">My Orders</h1>

      <div className="space-y-5">
        {orders.map((order) => (
          <article
            key={order.id}
            data-order
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          >
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Order ID: {order.id}</h2>
                <p className="text-zinc-400">{new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <span className="h-fit rounded-full border border-white/20 px-4 py-2">
                {order.status}
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 text-zinc-300">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>Rs. {item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xl font-bold">Total: Rs. {order.total}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Orders;
