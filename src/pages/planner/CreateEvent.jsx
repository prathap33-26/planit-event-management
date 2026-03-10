import { useState } from "react";
import "../../styles/planner.css";

function CreateEvent(){

const [event,setEvent] = useState({
title:"",
date:"",
location:"",
description:"",
status:"Planned"
})

const handleChange=(e)=>{
setEvent({
...event,
[e.target.name]:e.target.value
})
}

const handleSubmit=(e)=>{
e.preventDefault()

console.log("Event Created:",event)

alert("Event Created Successfully!")
}

return(

<div className="planner-container">

<h2>Create New Event</h2>

<div className="card">

<form onSubmit={handleSubmit}>

<div className="form-group">
<label>Event Title</label>
<input 
type="text"
name="title"
placeholder="Enter event title"
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Event Date</label>
<input 
type="date"
name="date"
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Location</label>
<input 
type="text"
name="location"
placeholder="Enter location"
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Description</label>
<textarea
name="description"
placeholder="Enter event description"
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Status</label>
<select
name="status"
onChange={handleChange}
>

<option>Planned</option>
<option>In Progress</option>
<option>Completed</option>

</select>
</div>

<button className="btn">
Create Event
</button>

</form>

</div>

</div>

)

}

export default CreateEvent;