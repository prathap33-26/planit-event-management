import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){

return(

<nav className="navbar">

<div className="nav-logo">

<img
src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
alt="PlanIt Logo"
/>

<h2>PlanIt</h2>

</div>

<ul className="nav-links">

<li><Link to="/">Home</Link></li>

<li><Link to="/planner">Planner</Link></li>

<li><Link to="/staff">Staff</Link></li>

<li><Link to="/login">Login</Link></li>

<li><Link to="/register" className="register-btn">Register</Link></li>

</ul>

</nav>

)

}

export default Navbar;