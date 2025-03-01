import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Debug logs
    console.log('Current token:', token);
    console.log('Current role:', role);

    if (token && role === 'admin') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      // Only clear if there was an invalid attempt
      if (token || role) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }
    }
    setIsLoading(false);
  }, []); // Run only once on component mount

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030014]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;