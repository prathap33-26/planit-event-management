import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/staff.css";

function StaffDashboard() {

  const navigate = useNavigate();

  // ✅ Read logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  const staffName = loggedInUser.username || "";
  const staffRole = loggedInUser.role || "Staff";

  // ✅ ALL hooks must be called BEFORE any early return
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Load tasks from localStorage and filter by logged-in staff name
  useEffect(() => {
    if (!staffName) {
      navigate("/login");
      return;
    }

    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // ✅ Filter tasks assigned to the logged-in staff
    const myTasks = storedTasks.filter(
      t => t.staff.toLowerCase() === staffName.toLowerCase()
    );

    setTasks(myTasks);
  }, [staffName, navigate]);

  const totalTasks      = tasks.length;
  const completedTasks  = tasks.filter(t => t.status === "Completed").length;
  const pendingTasks    = tasks.filter(t => t.status === "Pending").length;
  const inProgressTasks = tasks.filter(t => t.status === "In Progress").length;

  // ✅ Update task status in localStorage
  const handleStatusChange = (id, newStatus) => {

    // Update in state
    const updatedTasks = tasks.map(t =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);

    // ✅ Also update in localStorage so planner can see updated status
    const allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedAllTasks = allTasks.map(t =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedAllTasks));
  };

  const filteredTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.event.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Early return AFTER all hooks
  if (!staffName) return null;

  return (
    <div className="staff-container">

      {/* HEADER */}
      <div className="staff-header">
        <h2>👋 Welcome back, {staffName}!</h2>
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

        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search by task or event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "30px" }}>
            No tasks assigned to you yet.
          </p>
        ) : (
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
              {filteredTasks.length > 0 ? filteredTasks.map((t, index) => (
                <tr key={t.id}>
                  <td>{index + 1}</td>
                  <td>{t.title}</td>
                  <td>{t.event}</td>
                  <td>{t.dueDate}</td>
                  <td>
                    <span className={`priority ${t.priority.toLowerCase()}`}>
                      {t.priority}
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
                    No tasks match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default StaffDashboard;