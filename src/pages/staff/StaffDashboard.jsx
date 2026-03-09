import React, { useState } from "react";
import TaskCard from "../../components/tasks/TaskCard";
import "../../styles/staff.css";

const StaffDashboard = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Update Website",
      description: "Update homepage banner and text",
      status: "Pending"
    },
    {
      id: 2,
      title: "Fix Login Bug",
      description: "Resolve login authentication issue",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Database Backup",
      description: "Backup database for safety",
      status: "Completed"
    }
  ]);

  const updateStatus = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="dashboard">

      <h1 className="dashboard-title">Staff Task Dashboard</h1>

      <div className="task-container">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            updateStatus={updateStatus}
          />
        ))}
      </div>

    </div>
  );
};

export default StaffDashboard;
