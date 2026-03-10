import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Task.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {

      setTasks([
        { id: 1, title: "Stage Setup", description: "Arrange stage", eventId: 101, status: "Pending" },
        { id: 2, title: "Decoration", description: "Decorate venue", eventId: 101, status: "In Progress" },
        { id: 3, title: "Guest Welcome", description: "Welcome guests", eventId: 102, status: "Completed" }
      ]);

    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      fetchTasks();
    } catch {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  return (
    <div className="dashboard">

      <h2 className="dashboard-title">Task List</h2>

      <div className="task-container">

        {tasks.map((task) => (
          <div className="task-card" key={task.id}>

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p><strong>Event ID:</strong> {task.eventId}</p>

            <p className={
              task.status === "Pending"
              ? "pending"
              : task.status === "In Progress"
              ? "progress"
              : "completed"
            }>
              {task.status}
            </p>

            <div className="task-buttons">
              <button className="edit-btn">Edit</button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TaskList;
