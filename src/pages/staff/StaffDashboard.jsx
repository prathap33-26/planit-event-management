import { useState } from "react";
import "../../styles/staff.css";

function StaffDashboard() {

  const staffName = "Prathap";
  const staffRole = "Event Coordinator";

  const [tasks, setTasks] = useState([
    { id: 1, task: "Decoration Setup",    event: "Wedding Event",     due: "20 March", priority: "high",   status: "Pending"     },
    { id: 2, task: "Food Arrangement",    event: "Corporate Meeting", due: "22 March", priority: "medium", status: "Completed"   },
    { id: 3, task: "Sound System",        event: "Birthday Party",    due: "25 March", priority: "high",   status: "In Progress" },
    { id: 4, task: "Guest Registration",  event: "Wedding Event",     due: "20 March", priority: "low",    status: "Pending"     },
    { id: 5, task: "Venue Cleanup",       event: "Birthday Party",    due: "25 March", priority: "medium", status: "Pending"     },
  ]);

  const [search, setSearch] = useState("");

  const totalTasks     = tasks.length;
  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const pendingTasks   = tasks.filter(t => t.status === "Pending").length;
  const inProgressTasks = tasks.filter(t => t.status === "In Progress").length;

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const filteredTasks = tasks.filter(t =>
    t.task.toLowerCase().includes(search.toLowerCase()) ||
    t.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="staff-container">

      {/* HEADER */}
      <div className="staff-header">
        <h2>👋 Welcome back, {staffName}!</h2>

        {/* STAFF INFO */}
        <div className="staff-info">
          <h3>👤 {staffName}</h3>
          <p>🎯 Role: {staffRole}</p>
          <p>📅 {new Date().toDateString()}</p>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="task-summary">

        <div className="summary-card">
          <h4>📋 Total Tasks</h4>
          <p>{totalTasks}</p>
        </div>

        <div className="summary-card">
          <h4>✅ Completed</h4>
          <p>{completedTasks}</p>
        </div>

        <div className="summary-card">
          <h4>🔄 In Progress</h4>
          <p>{inProgressTasks}</p>
        </div>

        <div className="summary-card">
          <h4>⏳ Pending</h4>
          <p>{pendingTasks}</p>
        </div>

      </div>

      {/* TASK TABLE */}
      <div className="card">

        <h3>📝 My Tasks</h3>

        {/* SEARCH */}
        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search by task or event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="staff-task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Event</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? filteredTasks.map(t => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.task}</td>
                <td>{t.event}</td>
                <td>{t.due}</td>
                <td>
                  <span className={`priority ${t.priority}`}>
                    {t.priority.charAt(0).toUpperCase() + t.priority.slice(1)}
                  </span>
                </td>
                <td>
                  <span className={`status ${t.status.toLowerCase().replace(" ", "")}`}>
                    {t.status}
                  </span>
                </td>
                <td>
                  <select
                    value={t.status}
                    onChange={(e) => handleStatusChange(t.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", color: "#6b7280", padding: "20px" }}>
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default StaffDashboard;