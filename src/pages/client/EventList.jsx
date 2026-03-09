import React from "react";
import { Link } from "react-router-dom";

const EventList = () => {

  const events = [
    {
      id: 1,
      title: "Wedding Ceremony",
      date: "12 June 2026",
      location: "Hyderabad",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Corporate Meeting",
      date: "20 June 2026",
      location: "Bangalore",
      status: "Completed"
    },
    {
      id: 3,
      title: "Birthday Party",
      date: "25 June 2026",
      location: "Chennai",
      status: "In Progress"
    }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>Client Event List</h2>

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Status: {event.status}</p>

          <Link to={`/client/event/${event.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventList;