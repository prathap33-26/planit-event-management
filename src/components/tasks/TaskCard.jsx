import React from "react";
import "../../styles/staff.css";

const TaskCard = ({ task, updateStatus }) => {

  const handleChange = (e) => {
    updateStatus(task.id, e.target.value);
  };

  const getStatusClass = () => {
    if (task.status === "Pending") return "pending";
    if (task.status === "In Progress") return "progress";
    if (task.status === "Completed") return "completed";
  };

  return (
    <div className="task-card">

      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p className={`status ${getStatusClass()}`}>
        Status: {task.status}
      </p>

      <select value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

    </div>
  );
};

export default TaskCard;
