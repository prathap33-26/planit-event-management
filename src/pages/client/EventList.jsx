import { Link } from "react-router-dom";
import "../../styles/client.css";

function EventList(){

const events = [
{
id:1,
title:"Wedding Event",
date:"20 March 2026",
location:"Hyderabad",
description:"A beautiful wedding celebration with full decoration and catering.",
img:"https://images.unsplash.com/photo-1519741497674-611481863552"
},
{
id:2,
title:"Birthday Party",
date:"25 March 2026",
location:"Bangalore",
description:"Fun birthday party with music, food and entertainment.",
img:"https://images.unsplash.com/photo-1464349153735-7db50ed83c84"
},
{
id:3,
title:"Corporate Meeting",
date:"30 March 2026",
location:"Chennai",
description:"Professional corporate event with conference arrangements.",
img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df"
}
]

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

<img src={event.img} alt={event.title}/>

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

<p>© 2026 PlanIt Event Management System</p>

</footer>

</div>

)

}

export default EventList;