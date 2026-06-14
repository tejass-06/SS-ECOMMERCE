import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="theme-toggle bg-white/10 px-4 py-2 rounded-xl"
      aria-label="Toggle theme"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
