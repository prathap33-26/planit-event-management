import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/client.css";

function EventList() {

  const [events, setEvents] = useState([]);

  const getEventImage = (title) => {
    const t = title?.toLowerCase() || "";
    if (t.includes("wedding"))
      return "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop";
    if (t.includes("birthday"))
      return "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop";
    if (t.includes("college") || t.includes("fest"))
      return "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop";
    if (t.includes("conference") || t.includes("meeting"))
      return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop";
    if (t.includes("concert") || t.includes("music"))
      return "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop";
    if (t.includes("party"))
      return "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop";
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setEvents(storedEvents);
  }, []);

  return (
    <div className="home-container">

      <section className="events">
        <h2>Upcoming Events</h2>

        {events.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
            <p>No events available yet. Check back soon! 🎉</p>
          </div>
        ) : (
          <div className="event-grid">
            {events.map(event => (
              <div className="event-card" key={event.id}>

                <img
                  src={getEventImage(event.title)}
                  alt={event.title}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop";
                  }}
                />

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p><b>📅 Date:</b> {event.date}</p>
                  <p><b>📍 Location:</b> {event.location}</p>
                  <p>{event.description}</p>
                  <Link to={`/events/${event.id}`}>
                    <button className="view-btn">View Details</button>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default EventList;