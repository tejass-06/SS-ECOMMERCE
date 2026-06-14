import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../../components/CartItem/CartItem';
import CouponInput from '../../components/CouponInput/CouponInput';
import { CartContext } from '../../context/CartContext';
import coupons from '../../data/coupons';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
    useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 99 : 0;
  const grandTotal = subtotal + shipping;

  const applyCoupon = (code) => {
    const coupon = coupons.find((item) => item.code === code.trim().toUpperCase());
    alert(coupon ? `${coupon.discount}% coupon available at checkout.` : 'Invalid coupon code');
  };

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] flex justify-center items-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Your Cart Is Empty</h1>
          <p className="mt-4 text-zinc-400">Start shopping to add products.</p>
          <Link to="/products" className="btn primary inline-block mt-6">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-between gap-4 mb-10">
        <h1 className="text-5xl font-bold">Shopping Cart</h1>
        <button onClick={clearCart} className="btn">
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-fit">
          <h2 className="text-3xl font-bold">Cart Summary</h2>

          <div className="mt-6 space-y-4">
            <CouponInput onApply={applyCoupon} />
            <p>Total Items: {totalItems}</p>
            <p>Subtotal: Rs. {subtotal}</p>
            <p>Shipping: Rs. {shipping}</p>
            <hr className="border-white/10" />
            <h3 className="text-2xl font-bold">Total: Rs. {grandTotal}</h3>
            <Link to="/checkout" className="btn primary w-full mt-4">
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
