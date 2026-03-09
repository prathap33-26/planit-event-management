import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to FSD Application</h1>
      <p className="home-text">Please login to access the dashboard</p>
      <Link to="/login" className="home-link">Go to Login</Link>
    </div>
  );
};

export default Home;

