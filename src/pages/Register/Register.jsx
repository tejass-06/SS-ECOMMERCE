import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ name: form.name, email: form.email });
    toast.success('Account created');
    navigate('/');
  };

  return (
    <section className="min-h-[80vh] flex justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold mb-8">Register</h1>

        <input
          name="name"
          placeholder="Name"
          aria-label="Full name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-zinc-900 mb-4"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-zinc-900 mb-4"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-zinc-900 mb-6"
          required
        />

        <button className="btn primary w-full">Create Account</button>

        <p className="mt-5 text-center text-zinc-400">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
