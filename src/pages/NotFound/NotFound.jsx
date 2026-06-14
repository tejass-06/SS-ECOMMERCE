import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found-page min-h-[80vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="mt-4 text-zinc-400">Page Not Found</p>
        <Link to="/" className="btn primary inline-block mt-6">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
