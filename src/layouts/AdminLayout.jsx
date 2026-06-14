import { NavLink } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const links = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/analytics', label: 'Analytics' },
    { to: '/admin/products', label: 'Products' },
    { to: '/admin/orders', label: 'Orders' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/coupons', label: 'Coupons' },
    { to: '/admin/reviews', label: 'Reviews' },
  ];

  return (
    <div className="admin-layout min-h-screen bg-zinc-950 text-white">
      <aside className="w-64 min-h-screen border-r border-white/10 p-6">
        <h2 className="text-2xl font-bold">LUXESTEP Admin</h2>
        <nav className="admin-nav mt-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/admin'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
