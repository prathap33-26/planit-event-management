import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Login(){

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:"",
role:"PLANNER"
});

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();

if(form.role === "PLANNER"){
navigate("/planner");
}
else if(form.role === "STAFF"){
navigate("/staff");
}
else{
navigate("/");
}
};

return(

<div className="auth-container">

<div className="login-box">

{/* LEFT SIDE LOGIN */}

<div className="login-left">

<h2>Login to PlanIt</h2>

<p className="login-desc">
Welcome back! Log in to manage events, staff tasks and client bookings.
</p>

<form onSubmit={handleSubmit}>

<label>Email</label>
<input
type="email"
name="email"
placeholder="Enter your email"
onChange={handleChange}
/>

<label>Password</label>
<input
type="password"
name="password"
placeholder="Enter your password"
onChange={handleChange}
/>

<label>Login As</label>
<select name="role" onChange={handleChange}>
<option value="PLANNER">Planner</option>
<option value="STAFF">Staff</option>
<option value="CLIENT">Client</option>
</select>

<button className="login-btn">
Login
</button>

</form>

<p className="login-footer">
Don't have an account?
<a href="/register"> Create one</a>
</p>

</div>

{/* RIGHT SIDE FEATURES */}

<div className="login-right">

<h2>Welcome to PlanIt</h2>

<p className="feature-desc">
Streamline your event management process with ease
</p>

<div className="feature-card">

<div className="feature-icon">📅</div>

<div>
<h4>Event Management</h4>
<p>Plan and organize events seamlessly</p>
</div>

</div>

<div className="feature-card">

<div className="feature-icon">✅</div>

<div>
<h4>Staff Task Tracking</h4>
<p>Assign and monitor tasks efficiently</p>
</div>

</div>

<div className="feature-card">

<div className="feature-icon">💬</div>

<div>
<h4>Client Feedback System</h4>
<p>Gather client feedback and improve services</p>
</div>

</div>

</div>

</div>

</div>

);

}

export default Login;