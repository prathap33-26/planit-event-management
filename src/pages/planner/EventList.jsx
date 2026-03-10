import "../../styles/planner.css";
import { Link } from "react-router-dom";

function TaskList(){

const tasks = [
{
id:1,
title:"Decoration Setup",
event:"Wedding Event",
staff:"Prathap",
priority:"High",
status:"Pending",
dueDate:"20 March"
},
{
id:2,
title:"Food Arrangement",
event:"Birthday Party",
staff:"Lalitha",
priority:"Medium",
status:"In Progress",
dueDate:"22 March"
},
{
id:3,
title:"Sound System Setup",
event:"Corporate Meeting",
staff:"Tharun",
priority:"Low",
status:"Completed",
dueDate:"18 March"
}
]

return(

<div className="planner-container">

<h2>Task Management</h2>

<div className="card">

<table className="task-table">

<thead>

<tr>
<th>ID</th>
<th>Title</th>
<th>Event</th>
<th>Staff</th>
<th>Priority</th>
<th>Status</th>
<th>Due Date</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{tasks.map(task=>(
<tr key={task.id}>

<td>{task.id}</td>

<td>{task.title}</td>

<td>{task.event}</td>

<td>{task.staff}</td>

<td>
<span className={`priority ${task.priority.toLowerCase()}`}>
{task.priority}
</span>
</td>

<td>
<span className={`status ${task.status.replace(" ","").toLowerCase()}`}>
{task.status}
</span>
</td>

<td>{task.dueDate}</td>

<td>

<button className="edit-btn">
Edit
</button>

<button className="delete-btn">
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default TaskList;