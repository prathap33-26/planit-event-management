import { Link, useNavigate } from 'react-router-dom';
import { getUserRole, logout } from '../utils/auth';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  const userRole = getUserRole();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">FSD App</Link>
      </div>
      
      <ul className="navbar-links">
        {/* Show role-based dashboard links */}
        {userRole === 'Planner' && (
          <li><Link to="/planner-dashboard" className="navbar-link">Planner Dashboard</Link></li>
        )}
        
        {userRole === 'Staff' && (
          <li><Link to="/staff-dashboard" className="navbar-link">Staff Dashboard</Link></li>
        )}
        
        {userRole === 'Client' && (
          <li><Link to="/client-dashboard" className="navbar-link">Client Dashboard</Link></li>
        )}
      </ul>

      <div className="navbar-user-section">
        {userRole && (
          <span className="navbar-user-role">Role: {userRole}</span>
        )}
        <button onClick={handleLogout} className="navbar-logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

