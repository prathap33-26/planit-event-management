import { useEffect, useState } from "react";
import "../../styles/planner.css";

function PlannerDashboard() {

  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  // ✅ Fixed: hardcode all 8 staff members
  const totalStaff = 8;

  // ✅ Load events and tasks from localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const storedTasks  = JSON.parse(localStorage.getItem("tasks")  || "[]");
    setEvents(storedEvents);
    setTasks(storedTasks);
  }, []);

  // ✅ Dynamic statistics
  const totalEvents     = events.length;
  const completedEvents = events.filter(e => e.status === "Completed").length;
  const totalTasks      = tasks.length;

  // ✅ Show only last 3 recent events
  const recentEvents = events.slice(-3).reverse();

  // ✅ Show only last 3 recent tasks
  const recentTasks = tasks.slice(-3).reverse();

  return (
    <div className="planner-dashboard">

      <h2>📊 Planner Dashboard</h2>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <h3>🎉 Total Events</h3>
          <p>{totalEvents}</p>
        </div>

        <div className="stat-card">
          <h3>📋 Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="stat-card">
          <h3>👨‍💼 Staff Members</h3>
          <p>{totalStaff}</p>   {/* ✅ Always shows 8 */}
        </div>

        <div className="stat-card">
          <h3>✅ Completed Events</h3>
          <p>{completedEvents}</p>
        </div>

      </div>

      {/* Recent Events */}
      <div className="card">
        <h3>📅 Recent Events</h3>

        {recentEvents.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "20px" }}>
            No events yet. Click "Create Event" to add one!
          </p>
        ) : (
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
              {recentEvents.map((e, index) => (
                <tr key={e.id}>
                  <td>{index + 1}</td>
                  <td>{e.title}</td>
                  <td>{e.date}</td>
                  <td>
                    <span className={`status ${e.status.toLowerCase().replace(" ", "")}`}>
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Task Overview */}
      <div className="card">
        <h3>📝 Task Overview</h3>

        {recentTasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "20px" }}>
            No tasks yet. Click "Create Task" to add one!
          </p>
        ) : (
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
              {recentTasks.map((t, index) => (
                <tr key={t.id}>
                  <td>{index + 1}</td>
                  <td>{t.title}</td>
                  <td>{t.staff}</td>
                  <td>
                    <span className={`status ${t.status.toLowerCase().replace(" ", "")}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default PlannerDashboard;