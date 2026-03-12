/**
 * Protected Route Component for Event Management System
 * Implements Route Protection and Role-Based Access Control (RBAC)
 */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../utils/auth';

/**
 * ProtectedRoute - Protects routes based on authentication and roles
 * @param {string[]} allowedRoles - Array of roles allowed to access the route
 */
const ProtectedRoute = ({ allowedRoles = [] }) => {
  const location = useLocation();
  
  // Check if user is authenticated
  const isAuth = isAuthenticated();
  const userRole = getUserRole();


  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
import {Navigate} from "react-router-dom";

function ProtectedRoute({children}){

const token=localStorage.getItem("token");

if(!token){
return <Navigate to="/login"/>
}

return children

}

export default ProtectedRoute;
