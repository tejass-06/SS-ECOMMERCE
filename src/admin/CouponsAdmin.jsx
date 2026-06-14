import coupons from '../data/coupons';
import './CouponsAdmin.css';

const CouponsAdmin = () => {
  return (
    <section className="coupons-admin p-10">
      <h1 className="text-5xl font-bold mb-8">Manage Coupons</h1>

      {coupons.map((coupon) => (
        <article key={coupon.code}>
          <h2 className="text-2xl font-bold">{coupon.code}</h2>
          <p>{coupon.discount}% discount</p>
        </article>
      ))}
    </section>
  );
};

export default CouponsAdmin;
