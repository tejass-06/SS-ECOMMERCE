import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold">LUXESTEP</h2>
            <p className="text-zinc-400">Premium Fashion & Footwear Store crafted for elevated style and lasting comfort.</p>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            <div className="footer-links flex flex-wrap gap-3 text-sm text-zinc-400">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="social-icons flex gap-5 text-2xl">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
