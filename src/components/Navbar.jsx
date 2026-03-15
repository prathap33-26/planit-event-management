import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const syncRole = () => {
      const userRole = localStorage.getItem("role");
      setRole(userRole || "");
    };

    syncRole(); // Run on mount

    window.addEventListener("roleChanged", syncRole); // Listen for login/logout
    window.addEventListener("storage", syncRole);     // Listen for cross-tab changes

    return () => {
      window.removeEventListener("roleChanged", syncRole);
      window.removeEventListener("storage", syncRole);
    };
  }, []);

  function logout() {
    localStorage.removeItem("role");
    setRole("");
    window.dispatchEvent(new Event("roleChanged")); // Notify navbar
    navigate("/");
  }

  return (
    <nav className="navbar">
      <h2 className="logo">PlanIt</h2>

      <div className="nav-links">

        {/* BEFORE LOGIN */}
        {!role && (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {/* CLIENT NAVBAR */}
        {role === "client" && (
          <>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/events">View Events</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}

        {/* PLANNER NAVBAR */}
        {role === "planner" && (
          <>
            <Link to="/planner">Dashboard</Link>
            <Link to="/planner/create-event">Create Event</Link>
            <Link to="/planner/events">View Events</Link>
            <Link to="/planner/create-task">Create Task</Link>
            <Link to="/planner/tasks">View Tasks</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}

        {/* STAFF NAVBAR */}
        {role === "staff" && (
          <>
            <Link to="/staff">Dashboard</Link>
            <Link to="/staff/tasks">My Tasks</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;