import { useState } from "react";

function CreateTask() {
  const [task, setTask] = useState({
    title: "",
    staff: "",
    event: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", task);
    alert("Task Created Successfully!");
  };

  return (
    <div>
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="staff"
          placeholder="Assign Staff"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="event"
          placeholder="Event Name"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="deadline"
          onChange={handleChange}
        />

        <button type="submit">Create Task</button>

      </form>
    </div>
  );
}

export default CreateTask;
