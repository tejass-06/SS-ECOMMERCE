import './Login.css';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    login({
      name: email.split('@')[0] || 'Demo User',
      email,
    });

    toast.success('Logged in');
    navigate('/');
  };

  return (
    <section className="min-h-[80vh] flex justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold mb-8">Login</h1>

        <input
          type="email"
          placeholder="Email"
          aria-label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 mb-6"
          required
        />

        <button className="btn primary w-full">Login</button>

        <p className="mt-5 text-center text-zinc-400">
          New to LUXESTEP? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
