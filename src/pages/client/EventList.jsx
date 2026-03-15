import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/client.css";

const BASE_URL = "http://localhost:8080/client";

function EventList(){

const [events,setEvents] = useState([]);

useEffect(()=>{

fetch(BASE_URL + "/getevents")
.then(res => res.json())
.then(data => {
console.log("Events from backend:",data);
setEvents(data);
})
.catch(err => console.log(err));

},[]);

return(

<div className="home-container">

{/* Hero Section */}

<section className="hero">

<h1>PlanIt Event Management</h1>

<p>
Plan and manage events efficiently. Create events, assign tasks,
track progress and ensure successful event execution.
</p>

<Link to="/events">
<button className="explore-btn">
Explore Events
</button>
</Link>

</section>

{/* Features Section */}

<section className="features">

<h2>Our Features</h2>

<div className="feature-grid">

<div className="feature-card">
<h3>📅 Event Planning</h3>
<p>Create and manage events easily with our planning tools.</p>
</div>

<div className="feature-card">
<h3>✅ Task Management</h3>
<p>Assign tasks to staff and monitor progress in real time.</p>
</div>

<div className="feature-card">
<h3>🤝 Team Collaboration</h3>
<p>Coordinate with staff members for smooth event execution.</p>
</div>

<div className="feature-card">
<h3>💬 Client Feedback</h3>
<p>Clients can review events and provide valuable feedback.</p>
</div>

</div>

</section>

{/* Events Section */}

<section className="events">

<h2>Upcoming Events</h2>

<div className="event-grid">

{events.map(event => (

<div className="event-card" key={event.id}>

<img 
src="https://images.unsplash.com/photo-1519741497674-611481863552"
alt={event.title}
/>

<div className="event-content">

<h3>{event.title}</h3>

<p><b>Date:</b> {event.date}</p>

<p><b>Location:</b> {event.location}</p>

<p>{event.description}</p>

<Link to={`/events/${event.id}`}>

<button className="view-btn">
View Details
</button>

</Link>

</div>

</div>

))}

</div>

</section>

{/* About Section */}

<section className="about">

<h2>About PlanIt</h2>

<p>
PlanIt is an event management platform designed to help planners,
staff members and clients collaborate efficiently. The system allows
event creation, task assignment, staff coordination and client feedback.
</p>

</section>

{/* Footer */}

<footer className="footer">

<div className="footer-container">

<div className="footer-section">
<h3>PlanIt</h3>
<p>
PlanIt is an event management platform that helps planners,
staff and clients collaborate to execute events successfully.
</p>
</div>

<div className="footer-section">
<h3>Quick Links</h3>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/planner">Planner</a></li>
<li><a href="/staff">Staff</a></li>
<li><a href="/login">Login</a></li>
</ul>
</div>

<div className="footer-section">
<h3>Contact</h3>
<p>Email: support@planit.com</p>
<p>Phone: +91 98765 43210</p>
<p>Location: Hyderabad, India</p>
</div>

<div className="footer-section">
<h3>Follow Us</h3>
<p>Instagram</p>
<p>LinkedIn</p>
<p>Twitter</p>
</div>

</div>

<div className="footer-bottom">
<p>© 2026 PlanIt Event Management System | All Rights Reserved</p>
</div>

</footer>

</div>

)

}

export default EventList;