import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../services/orderService';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 99 : 0;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    if (!cart.length) {
      toast.error('Your cart is empty');
      return;
    }

    const result = await createOrder({
      customer: form,
      items: cart,
      subtotal,
      shipping,
      total,
    });

    if (result.success) {
      clearCart();
      toast.success(`Order ${result.orderId} placed`);
      navigate('/orders');
    }
  };

  if (!cart.length) {
    return (
      <section className="min-h-[70vh] flex justify-center items-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">No Items To Checkout</h1>
          <p className="mt-4 text-zinc-400">Add products to your cart first.</p>
          <Link to="/products" className="btn primary inline-block mt-6">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page container py-12">
      <h1 className="text-5xl font-bold mb-10">Checkout</h1>

      <form onSubmit={placeOrder} className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <div className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900"
              required
            />
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900"
              required
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900"
              required
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-fit">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-5 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-zinc-300">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>Rs. {item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <hr className="my-4 border-white/10" />
          <p>Subtotal: Rs. {subtotal}</p>
          <p>Shipping: Rs. {shipping}</p>
          <h3 className="text-3xl font-bold mt-4">Rs. {total}</h3>

          <button className="btn primary w-full mt-6">Place Order</button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
