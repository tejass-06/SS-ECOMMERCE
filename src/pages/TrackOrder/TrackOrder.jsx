import './TrackOrder.css';

const TrackOrder = () => {
  const steps = ['Order Placed', 'Packed', 'Shipped', 'Out For Delivery', 'Delivered'];

  return (
    <section className="track-order-page max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Track Order</h1>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackOrder;
