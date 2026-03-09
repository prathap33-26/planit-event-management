import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register(){

  const { role } = useParams();
  const navigate = useNavigate();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = (e)=>{
    e.preventDefault();

    if(!firstName || !lastName || !email || !password){
      alert("Please fill all fields");
      return;
    }

    alert(`Registered as ${role}`);

    navigate("/");
  };

  return(

    <div className="auth-container">

      <div className="auth-card">

        <h1>Register as {role}</h1>

        <form onSubmit={handleRegister}>

          <label>First Name</label>
          <input
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          />

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

          <button className="primary-btn">
            Register
          </button>

        </form>

        <p className="switch">
          Already have an account?
          <span
          className="link"
          onClick={()=>navigate("/")}
          style={{cursor:"pointer", marginLeft:"5px"}}
          >
            Login
          </span>
        </p>

      </div>

    </div>

  );
}

export default Register;
