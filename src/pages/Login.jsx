import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../utils/auth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [selectedRole, setSelectedRole] = useState("Planner");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      setError("Please select a role");
      return;
    }

    const mockToken = `token_${selectedRole}_${Date.now()}`;

    login(mockToken, selectedRole);

    switch (selectedRole) {
      case "Planner":
        navigate("/planner-dashboard", { replace: true });
        break;
      case "Staff":
        navigate("/staff-dashboard", { replace: true });
        break;
      case "Client":
        navigate("/client-dashboard", { replace: true });
        break;
      default:
        navigate(from, { replace: true });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Select your role to continue</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input-group">
            <label className="login-label">Select Role:</label>

            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="login-select"
            >
              <option value="Planner">Planner</option>
              <option value="Staff">Staff</option>
              <option value="Client">Client</option>
            </select>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;