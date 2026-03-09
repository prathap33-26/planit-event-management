import { Link } from 'react-router-dom';
import './Unauthorized.css';

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h1 className="unauthorized-title">403 - Access Denied</h1>
        <p className="unauthorized-message">
          You do not have permission to access this page.
        </p>
        <p className="unauthorized-sub-message">
          Please contact your administrator if you believe this is an error.
        </p>
        <Link to="/login" className="unauthorized-link">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;

