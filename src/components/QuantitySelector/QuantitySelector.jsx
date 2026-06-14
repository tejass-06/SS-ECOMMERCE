import './QuantitySelector.css';
const QuantitySelector = ({ quantity, increase, decrease }) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={decrease}
        className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
        aria-label="Decrease quantity"
      >
        -
      </button>

      <span className="text-lg font-semibold">{quantity}</span>

      <button
        onClick={increase}
        className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
