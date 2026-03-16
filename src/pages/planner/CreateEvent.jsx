import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/planner.css";

function CreateEvent() {

  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    status: "Planned"
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");

    // ✅ Create new event with unique id
    const newEvent = {
      ...event,
      id: Date.now(), // unique id
    };

    // ✅ Add new event to the list
    existingEvents.push(newEvent);

    // ✅ Save back to localStorage
    localStorage.setItem("events", JSON.stringify(existingEvents));

    alert("Event Created Successfully!");

    // ✅ Redirect to view events page
    navigate("/planner/events");
  };

  return (
    <div className="create-event-container">
      <div className="create-event-card">

        <h2 className="create-title">Create New Event</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={event.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={event.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter event description"
              value={event.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={event.status} onChange={handleChange}>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="create-btn">Create Event</button>

        </form>

      </div>
    </div>
  );
}

export default CreateEvent;