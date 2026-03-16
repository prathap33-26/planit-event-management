import { useState, useEffect } from "react";
import "../../styles/planner.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // ✅ Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  // ✅ Delete task
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    alert("Task Deleted Successfully! 🗑️");
  };

  // ✅ Open edit modal
  const handleEdit = (task) => {
    setEditTask({ ...task });
  };

  // ✅ Handle edit form change
  const handleEditChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  // ✅ Save edited task
  const handleEditSave = () => {
    const updatedTasks = tasks.map(t => t.id === editTask.id ? editTask : t);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditTask(null);
    alert("Task Updated Successfully! ✅");
  };

  return (
    <div className="planner-container">

      <h2 className="page-title">📋 Task Management</h2>

      {/* Task Stats */}
      <div className="task-stats">

        <div className="stat-box">
          <h4>Total Tasks</h4>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-box">
          <h4>Completed</h4>
          <p>{tasks.filter(t => t.status === "Completed").length}</p>
        </div>

        <div className="stat-box">
          <h4>Pending</h4>
          <p>{tasks.filter(t => t.status === "Pending").length}</p>
        </div>

        <div className="stat-box">
          <h4>In Progress</h4>
          <p>{tasks.filter(t => t.status === "In Progress").length}</p>
        </div>

      </div>

      {/* Task Table */}
      <div className="card">

        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "30px" }}>
            No tasks created yet. Click "Create Task" to add one!
          </p>
        ) : (
          <table className="task-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Event</th>
                <th>Staff</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.event}</td>
                  <td>{task.staff}</td>
                  <td>
                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${task.status.replace(" ", "").toLowerCase()}`}>
                      {task.status}
                    </span>
                  </td>
                  <td>{task.dueDate}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(task)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

      {/* ✅ Edit Modal */}
      {editTask && (
        <div style={{
          position: "fixed", top: 0, left: 0,
          width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "white", borderRadius: "12px",
            padding: "35px", width: "450px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
          }}>

            <h3 style={{ marginBottom: "20px", color: "#0f172a" }}>✏️ Edit Task</h3>

            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                name="title"
                value={editTask.title}
                onChange={handleEditChange}
              />
            </div>

            <div className="form-group">
              <label>Assign Staff</label>
              <select name="staff" value={editTask.staff} onChange={handleEditChange}>
                <option value="Purushotham">Purushotham</option>
                <option value="Lalitha">Lalitha</option>
                <option value="Prathap">Prathap</option>
                <option value="Munendra">Munendra</option>
                <option value="Tharun">Tharun</option>
                <option value="Mythili">Mythili</option>
                <option value="Kasturi">Kasturi</option>
                <option value="Shahanadh">Shahanadh</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select name="priority" value={editTask.priority} onChange={handleEditChange}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select name="status" value={editTask.status} onChange={handleEditChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={editTask.dueDate}
                onChange={handleEditChange}
              />
            </div>

            {/* Modal Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button className="create-btn" onClick={handleEditSave}>
                Save Changes
              </button>
              <button
                className="delete-btn"
                onClick={() => setEditTask(null)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default TaskList;