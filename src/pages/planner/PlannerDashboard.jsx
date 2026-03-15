import "../../styles/planner.css";

function PlannerDashboard(){

const events = [
{ id:1, title:"Wedding Event", date:"20 March", status:"Planned"},
{ id:2, title:"Corporate Meeting", date:"22 March", status:"In Progress"},
{ id:3, title:"Birthday Party", date:"25 March", status:"Completed"}
];

const tasks = [
{ id:1, task:"Decoration Setup", staff:"Prathap", status:"Pending"},
{ id:2, task:"Food Arrangement", staff:"Lalitha", status:"Completed"},
{ id:3, task:"Sound System", staff:"Tharun", status:"In Progress"}
];

return(

<div className="planner-dashboard">

<h2>📊 Planner Dashboard</h2>

{/* Statistics */}

<div className="stats-grid">

<div className="stat-card">
<h3>🎉 Total Events</h3>
<p>12</p>
</div>

<div className="stat-card">
<h3>📋 Total Tasks</h3>
<p>25</p>
</div>

<div className="stat-card">
<h3>👨‍💼 Staff Members</h3>
<p>8</p>
</div>

<div className="stat-card">
<h3>✅ Completed Events</h3>
<p>5</p>
</div>

</div>

{/* Recent Events */}

<div className="card">

<h3>📅 Recent Events</h3>

<table className="table">

<thead>
<tr>
<th>ID</th>
<th>Title</th>
<th>Date</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{events.map(e=>(
<tr key={e.id}>
<td>{e.id}</td>
<td>{e.title}</td>
<td>{e.date}</td>
<td>
<span className={`status ${e.status.toLowerCase().replace(" ","")}`}>
{e.status}
</span>
</td>
</tr>
))}

</tbody>

</table>

</div>

{/* Task Overview */}

<div className="card">

<h3>📝 Task Overview</h3>

<table className="table">

<thead>
<tr>
<th>ID</th>
<th>Task</th>
<th>Staff</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{tasks.map(t=>(
<tr key={t.id}>
<td>{t.id}</td>
<td>{t.task}</td>
<td>{t.staff}</td>
<td>
<span className={`status ${t.status.toLowerCase().replace(" ","")}`}>
{t.status}
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

export default PlannerDashboard;