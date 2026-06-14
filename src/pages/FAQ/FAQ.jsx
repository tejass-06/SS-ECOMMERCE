import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq-page max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-10">Frequently Asked Questions</h1>

      <div className="space-y-5">
        <details open>
          <summary>How long is delivery?</summary>
          <p className="mt-2 text-zinc-400">Usually 3-7 days.</p>
        </details>

        <details>
          <summary>Can I return products?</summary>
          <p className="mt-2 text-zinc-400">Yes, within 7 days.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
