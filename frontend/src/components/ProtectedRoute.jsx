import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return token && role === 'admin';
  };

  const isAuthenticated = checkAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate 
      to="/admin/login" 
      state={{ from: location.pathname }}
      replace={true}
    />;
  }
  
  if (!token || role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;