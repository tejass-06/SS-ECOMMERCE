import { Navigate } from 'react-router-dom';

import { APP_CONFIG } from '../config/appConfig';

const ProtectedRoute = ({ children }) => {
  if (!APP_CONFIG.AUTH_ENABLED) {
    return children;
  }

  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
