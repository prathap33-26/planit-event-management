import { useParams } from "react-router-dom";
import { useState } from "react";
import "../../styles/client.css";

function EventDetails(){

const { id } = useParams()

const event = {
id:id,
title:"Wedding Event",
date:"20 March 2026",
location:"Hyderabad",
status:"In Progress",
description:"A grand wedding celebration with decoration, catering and music arrangements."
}

const tasks = [
{task:"Decoration Setup",status:"Completed"},
{task:"Food Catering",status:"In Progress"},
{task:"Sound System",status:"Pending"}
]

const [feedback,setFeedback] = useState("")

const submitFeedback=()=>{
alert("Feedback Submitted Successfully")
setFeedback("")
}

return(

<div className="event-details-container">

{/* Event Info */}

<div className="event-info-card">

<h2>{event.title}</h2>

<p><b>Date:</b> {event.date}</p>

<p><b>Location:</b> {event.location}</p>

<p><b>Status:</b> 
<span className={`status ${event.status.replace(" ","").toLowerCase()}`}>
{event.status}
</span>
</p>

<p>{event.description}</p>

</div>

{/* Event Tasks */}

<div className="card">

<h3>Event Tasks Progress</h3>

<table className="task-table">

<thead>

<tr>
<th>Task</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{tasks.map((task,index)=>(
<tr key={index}>

<td>{task.task}</td>

<td>
<span className={`status ${task.status.replace(" ","").toLowerCase()}`}>
{task.status}
</span>
</td>

</tr>
))}

</tbody>

</table>

</div>

{/* Feedback Section */}

<div className="card">

<h3>Submit Feedback</h3>

<textarea
placeholder="Write your feedback about the event..."
value={feedback}
onChange={(e)=>setFeedback(e.target.value)}
/>

<button className="btn" onClick={submitFeedback}>
Submit Feedback
</button>

</div>

</div>

)

}

export default EventDetails;