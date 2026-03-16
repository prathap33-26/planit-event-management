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

    syncRole();

    window.addEventListener("roleChanged", syncRole);
    window.addEventListener("storage", syncRole);

    return () => {
      window.removeEventListener("roleChanged", syncRole);
      window.removeEventListener("storage", syncRole);
    };
  }, []);

  function logout() {
    localStorage.removeItem("role");
    localStorage.removeItem("loggedInUser");
    setRole("");
    window.dispatchEvent(new Event("roleChanged"));
    navigate("/");
  }

  return (
    <nav className="navbar">

      {/* ✅ LOGO */}
      <div className="nav-logo">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="10" fill="#6366f1" />
          <path d="M10 10h6v16h-6z" fill="white" />
          <path d="M10 10h12v6H10z" fill="white" />
          <circle cx="26" cy="24" r="5" fill="white" />
          <path d="M24 24l1.5 1.5L28 22" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2>PlanIt</h2>
      </div>

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
            <button onClick={logout}>Logout</button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;