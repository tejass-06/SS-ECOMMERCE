import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page container py-20">
      <div className="page-heading max-w-3xl mb-10">
        <p className="text-zinc-400 uppercase tracking-[0.35em] text-sm">Reach out to our support team</p>
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>

      <form className="space-y-6 max-w-3xl section-panel p-8">
        <input
          type="text"
          placeholder="Name"
          aria-label="Full name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
          aria-label="Email address"
          className="form-input"
        />
        <textarea
          rows="5"
          placeholder="Message"
          aria-label="Message"
          className="form-input resize-y"
        />
        <button className="btn primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
