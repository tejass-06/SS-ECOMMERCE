import { Navigate } from 'react-router-dom';

import { APP_CONFIG } from '../config/appConfig';

const AdminRoute = ({ children }) => {
  if (!APP_CONFIG.ADMIN_ENABLED) {
    return children;
  }

  const user = JSON.parse(localStorage.getItem('user'));

  if (user?.role === 'admin') {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
