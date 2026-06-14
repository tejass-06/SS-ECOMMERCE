import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2 className="text-3xl font-bold">Join The LUXESTEP List</h2>
      <form>
        <input type="email" placeholder="Email address" aria-label="Email address" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
