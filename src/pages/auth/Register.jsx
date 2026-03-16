import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CLIENT"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save registered users to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    // Check if email already exists
    const alreadyExists = existingUsers.find(u => u.email === form.email);
    if (alreadyExists) {
      alert("Email already registered! Please login.");
      return;
    }

    existingUsers.push({
      username: form.username,
      email: form.email,
      password: form.password,
      role: form.role,
    });

    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

    alert("Registration Successful! Redirecting to Login...");

    // ✅ Redirect to login page
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="login-box">

        {/* LEFT SIDE REGISTER FORM */}
        <div className="login-left">
          <h2>Create Account</h2>
          <p className="login-desc">
            Register to start managing events with PlanIt
          </p>

          <form onSubmit={handleSubmit}>

            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <label>Select Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="PLANNER">Planner</option>
              <option value="STAFF">Staff</option>
              <option value="CLIENT">Client</option>
            </select>

            <button type="submit" className="login-btn">
              Register
            </button>

          </form>

          <p className="login-footer">
            Already have an account?
            <Link to="/login"> Login here</Link>
          </p>
        </div>

        {/* RIGHT SIDE FEATURES */}
        <div className="login-right">
          <h2>Join PlanIt</h2>
          <p className="feature-desc">
            Create your account and start organizing events efficiently
          </p>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <div>
              <h4>Event Planning</h4>
              <p>Create and manage events easily</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍💼</div>
            <div>
              <h4>Staff Management</h4>
              <p>Assign and monitor staff tasks</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <div>
              <h4>Client Interaction</h4>
              <p>Collect feedback and improve services</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;