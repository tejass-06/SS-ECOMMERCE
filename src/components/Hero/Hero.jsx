import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section h-[92vh] grid place-items-center text-center overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="hero-panel mx-auto max-w-4xl p-8 md:p-14"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-[-0.04em]">
            Fashion That Defines You
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover premium sneakers and fashion footwear crafted for refined comfort and bold
            style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link to="/products" className="btn primary px-8 py-4">
              Shop Collection
            </Link>
            <Link to="/contact" className="btn border-white/20 px-8 py-4">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
