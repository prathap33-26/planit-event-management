import { useState } from "react";
import "../../styles/planner.css";

function CreateTask(){

const [task,setTask] = useState({
title:"",
description:"",
event:"",
staff:"",
priority:"Medium",
dueDate:"",
status:"Pending"
});

const handleChange=(e)=>{
setTask({
...task,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();

console.log("Task Created:",task);

alert("Task Created Successfully");
};

return(

<div className="create-task-container">

<div className="create-task-card">

<h2 className="create-title">Create Task</h2>

<form onSubmit={handleSubmit} className="task-form">

{/* Task Title */}

<div className="form-group">
<label>Task Title</label>
<input
type="text"
name="title"
placeholder="Enter task title"
onChange={handleChange}
/>
</div>

{/* Description */}

<div className="form-group">
<label>Description</label>
<textarea
name="description"
placeholder="Enter task description"
onChange={handleChange}
/>
</div>

{/* Select Event */}

<div className="form-group">
<label>Select Event</label>
<select name="event" onChange={handleChange}>
<option>Wedding Event</option>
<option>Birthday Party</option>
<option>Corporate Meeting</option>
</select>
</div>

{/* Assign Staff */}

<div className="form-group">
<label>Assign Staff</label>
<select name="staff" onChange={handleChange}>
<option>Ravi</option>
<option>Kiran</option>
<option>Arjun</option>
<option>Rahul</option>
</select>
</div>

{/* Priority */}

<div className="form-group">
<label>Priority</label>
<select name="priority" onChange={handleChange}>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>

{/* Due Date */}

<div className="form-group">
<label>Due Date</label>
<input
type="date"
name="dueDate"
onChange={handleChange}
/>
</div>

{/* Status */}

<div className="form-group">
<label>Status</label>
<select name="status" onChange={handleChange}>
<option>Pending</option>
<option>In Progress</option>
<option>Completed</option>
</select>
</div>

<button className="create-btn">
Create Task
</button>

</form>

</div>

</div>

);

}

export default CreateTask;