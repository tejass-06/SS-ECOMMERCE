import { getOrders } from '../services/orderService';
import './OrdersAdmin.css';

const OrdersAdmin = () => {
  const orders = getOrders();

  return (
    <section className="orders-admin p-10">
      <h1 className="text-5xl font-bold mb-8">Manage Orders</h1>

      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer.name}</td>
              <td>{order.status}</td>
              <td>Rs. {order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {!orders.length && <p className="text-zinc-400">No orders placed yet.</p>}
    </section>
  );
};

export default OrdersAdmin;
