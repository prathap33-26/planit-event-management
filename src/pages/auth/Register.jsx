import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function Register(){

const [form,setForm] = useState({
username:"",
email:"",
password:"",
confirmPassword:"",
role:"CLIENT"
})

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}

const handleSubmit=(e)=>{
e.preventDefault()

if(form.password !== form.confirmPassword){
alert("Passwords do not match")
return
}

console.log("Register Data:",form)

alert("Registration Successful")
}

return(

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
onChange={handleChange}
/>

<label>Email</label>
<input
type="email"
name="email"
placeholder="Enter email"
onChange={handleChange}
/>

<label>Password</label>
<input
type="password"
name="password"
placeholder="Enter password"
onChange={handleChange}
/>

<label>Confirm Password</label>
<input
type="password"
name="confirmPassword"
placeholder="Confirm password"
onChange={handleChange}
/>

<label>Select Role</label>
<select name="role" onChange={handleChange}>
<option value="PLANNER">Planner</option>
<option value="STAFF">Staff</option>
<option value="CLIENT">Client</option>
</select>

<button className="login-btn">
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

)

}

export default Register;