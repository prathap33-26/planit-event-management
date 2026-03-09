import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../utils/auth';

/**
 * ProtectedRoute - Higher-order component for route protection
 * 
 * @param {string|string[]} allowedRoles - Single role or array of roles allowed to access the route
 * @param {React.ReactNode} children - Child components to render if authorized
 * @returns {JSX.Element} - The child components or a redirect
 */
const ProtectedRoute = ({ allowedRoles, children }) => {
  const location = useLocation();
  
  
  if (!isAuthenticated()) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRole = getUserRole();


  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  if (allowedRoles && !roles.includes(userRole)) {
  
    return <Navigate to="/unauthorized" replace />;
  }

 
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;

