import { useState } from 'react';
import './CouponInput.css';

const CouponInput = ({ onApply }) => {
  const [coupon, setCoupon] = useState('');

  return (
    <div className="coupon-input flex gap-3">
      <input
        value={coupon}
        onChange={(event) => setCoupon(event.target.value)}
        placeholder="Coupon Code"
        className="flex-1 p-3 rounded-xl bg-zinc-900"
      />

      <button onClick={() => onApply?.(coupon)} className="btn primary px-5">
        Apply
      </button>
    </div>
  );
};

export default CouponInput;
