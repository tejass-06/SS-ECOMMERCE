import './CartItem.css';
import { FaTrash } from 'react-icons/fa';

import QuantitySelector from '../QuantitySelector/QuantitySelector';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 flex flex-col md:flex-row gap-5">
      <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-2xl" />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold">{item.name}</h2>
        <p className="text-zinc-400 mt-2">{item.brand}</p>
        <p className="text-2xl font-bold mt-4">Rs. {item.price}</p>

        <div className="mt-4">
          <QuantitySelector
            quantity={item.quantity}
            increase={() => increaseQuantity(item.id)}
            decrease={() => decreaseQuantity(item.id)}
          />
        </div>

        <p className="mt-4 font-semibold">Subtotal: Rs. {item.price * item.quantity}</p>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="self-start text-red-500 hover:text-red-400"
        aria-label="Remove item"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;
