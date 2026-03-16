import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/planner.css";

function CreateTask() {

  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    event: "",
    staff: "Purushotham",
    priority: "Medium",
    dueDate: "",
    status: "Pending"
  });

  // ✅ Load events from localStorage for the dropdown
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setEvents(storedEvents);

    // Set default event to first event if available
    if (storedEvents.length > 0) {
      setTask(prev => ({ ...prev, event: storedEvents[0].title }));
    }
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get existing tasks from localStorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // ✅ Create new task with unique id
    const newTask = {
      ...task,
      id: Date.now(),
    };

    // ✅ Save to localStorage
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    alert("Task Created Successfully! ✅");

    // ✅ Redirect to task list
    navigate("/planner/tasks");
  };

  return (
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
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter task description"
              value={task.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Select Event — ✅ loaded from localStorage */}
          <div className="form-group">
            <label>Select Event</label>
            <select name="event" value={task.event} onChange={handleChange} required>
              {events.length === 0 ? (
                <option value="">No events available — create one first</option>
              ) : (
                events.map(e => (
                  <option key={e.id} value={e.title}>{e.title}</option>
                ))
              )}
            </select>
          </div>

          {/* Assign Staff — ✅ your 8 team members */}
          <div className="form-group">
            <label>Assign Staff</label>
            <select name="staff" value={task.staff} onChange={handleChange}>
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

          {/* Priority */}
          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={task.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="create-btn">
            Create Task
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreateTask;