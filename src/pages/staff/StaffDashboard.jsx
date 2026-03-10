import { useState } from "react";
import "../../styles/staff.css";

function StaffDashboard() {

const [search,setSearch] = useState("");

const [tasks,setTasks] = useState([
{
id:1,
title:"Decoration Setup",
event:"Wedding Event",
priority:"High",
dueDate:"20 March 2026",
status:"Pending"
},
{
id:2,
title:"Food Arrangement",
event:"Birthday Party",
priority:"Medium",
dueDate:"22 March 2026",
status:"In Progress"
},
{
id:3,
title:"Sound System Setup",
event:"Corporate Meeting",
priority:"Low",
dueDate:"18 March 2026",
status:"Completed"
}
]);

const updateStatus=(id,newStatus)=>{

const updatedTasks = tasks.map(task=>{
if(task.id===id){
return {...task,status:newStatus}
}
return task
});

setTasks(updatedTasks);

}

const filteredTasks = tasks.filter(task =>
task.event.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="staff-container">

<h2>Staff Task Dashboard</h2>

{/* Staff Info */}

<div className="staff-info">
<h3>Welcome Staff</h3>
<p>Staff ID : S102</p>
<p>Role : Event Staff</p>
</div>

{/* Task Summary */}

<div className="task-summary">

<div className="summary-card">
<h4>Total Tasks</h4>
<p>{tasks.length}</p>
</div>

<div className="summary-card">
<h4>Completed</h4>
<p>{tasks.filter(t => t.status==="Completed").length}</p>
</div>

<div className="summary-card">
<h4>Pending</h4>
<p>{tasks.filter(t => t.status==="Pending").length}</p>
</div>

<div className="summary-card">
<h4>In Progress</h4>
<p>{tasks.filter(t => t.status==="In Progress").length}</p>
</div>

</div>

{/* Search */}

<input
type="text"
placeholder="Search by event name..."
className="search-box"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="card">

<table className="staff-task-table">

<thead>

<tr>
<th>ID</th>
<th>Task</th>
<th>Event</th>
<th>Priority</th>
<th>Due Date</th>
<th>Status</th>
<th>Update Status</th>
</tr>

</thead>

<tbody>

{filteredTasks.map(task=>(

<tr key={task.id}>

<td>{task.id}</td>

<td>{task.title}</td>

<td>{task.event}</td>

<td>
<span className={`priority ${task.priority.toLowerCase()}`}>
{task.priority}
</span>
</td>

<td>{task.dueDate}</td>

<td>
<span className={`status ${task.status.replace(" ","").toLowerCase()}`}>
{task.status}
</span>
</td>

<td>

<select
onChange={(e)=>updateStatus(task.id,e.target.value)}
defaultValue={task.status}
>

<option>Pending</option>
<option>In Progress</option>
<option>Completed</option>

</select>

</td>

</tr>

))}

</tbody>

</table>

</div>

{/* Logout Button */}

<div className="logout-section">
<button className="logout-btn">Logout</button>
</div>

</div>

)

}

export default StaffDashboard;