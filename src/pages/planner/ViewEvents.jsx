import { useEffect, useState } from "react";
import "../../styles/planner.css";

const BASE_URL = "http://localhost:8080/client";

function ViewEvents(){

const [events,setEvents] = useState([]);

useEffect(()=>{

fetch(BASE_URL + "/getevents")
.then(res => res.json())
.then(data => {
console.log("Events:",data);
setEvents(data);
})
.catch(err => console.log(err));

},[]);

return(

<div className="planner-container">
 
<h2 className="page-title">📅 Event Management</h2>

{/* Event Statistics */}

<div className="event-stats">

<div className="stat-box">
<h4>Total Events</h4>
<p>{events.length}</p>
</div>

<div className="stat-box">
<h4>Planned</h4>
<p>{events.filter(e => e.status==="Planned").length}</p>
</div>

<div className="stat-box">
<h4>In Progress</h4>
<p>{events.filter(e => e.status==="In Progress").length}</p>
</div>

<div className="stat-box">
<h4>Completed</h4>
<p>{events.filter(e => e.status==="Completed").length}</p>
</div>

</div>

{/* Events Table */}

<div className="card">

<table className="table">

<thead>

<tr>
<th>ID</th>
<th>Event Title</th>
<th>Date</th>
<th>Location</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{events.map(event => (

<tr key={event.id}>

<td>{event.id}</td>

<td>{event.title}</td>

<td>{event.date}</td>

<td>{event.location}</td>

<td>
<span className={`status ${event.status.replace(" ","").toLowerCase()}`}>
{event.status}
</span>
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default ViewEvents;
