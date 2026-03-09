import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(!email || !password){
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    alert("Login Success");
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome back 👋</h1>
        <p className="subtitle">
          Sign in to EventOS — Planner, Staff, or Client
        </p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="primary-btn">Sign In</button>

        </form>

        <p className="switch">
          No account? Choose role below
        </p>

        <div className="demo">

          <p className="demo-title">REGISTER</p>

          <button
          className="demo-btn"
          onClick={()=>navigate("/register/planner")}
          >
            📁 Register as Planner
          </button>

          <button
          className="demo-btn"
          onClick={()=>navigate("/register/staff")}
          >
            ⚙️ Register as Staff
          </button>

          <button
          className="demo-btn"
          onClick={()=>navigate("/register/client")}
          >
            👤 Register as Client
          </button>

        </div>

      </div>

    </div>

  );
}

export default Login;
