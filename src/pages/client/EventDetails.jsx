import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/client.css";

function EventDetails() {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [feedback, setFeedback] = useState("");

  // ✅ Load event from localStorage instead of backend
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const selectedEvent = storedEvents.find(e => String(e.id) === String(id));
    setEvent(selectedEvent);
  }, [id]);

  // ✅ Save feedback to localStorage instead of backend
  const submitFeedback = () => {

    if (!feedback) {
      alert("Please enter feedback");
      return;
    }

    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");

    // Find and update the event with new feedback
    const updatedEvents = storedEvents.map(e => {
      if (String(e.id) === String(id)) {
        return {
          ...e,
          feedbacks: [...(e.feedbacks || []), feedback]
        };
      }
      return e;
    });

    // Save back to localStorage
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Update state to show new feedback
    const updatedEvent = updatedEvents.find(e => String(e.id) === String(id));
    setEvent(updatedEvent);

    alert("Feedback Submitted Successfully! ✅");
    setFeedback("");
  };

  // ✅ Show loading if event not found yet
  if (!event) {
    return (
      <div style={{ textAlign: "center", padding: "60px", color: "#6b7280" }}>
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="event-details-container">

      {/* Event Information */}
      <div className="event-info-card">
        <h2>{event.title}</h2>
        <p><b>📅 Date:</b> {event.date}</p>
        <p><b>📍 Location:</b> {event.location}</p>
        <p><b>🔖 Status:</b> {event.status}</p>
        <p>{event.description}</p>
      </div>

      {/* Previous Feedbacks */}
      {event.feedbacks && event.feedbacks.length > 0 && (
        <div className="card">
          <h3>💬 Previous Feedbacks</h3>
          {event.feedbacks.map((fb, index) => (
            <div key={index} style={{
              background: "#f1f5f9",
              padding: "12px 16px",
              borderRadius: "8px",
              color: "#334155",
              fontSize: "14px"
            }}>
              {fb}
            </div>
          ))}
        </div>
      )}

      {/* Feedback Section */}
      <div className="card">
        <h3>Submit Feedback</h3>
        <textarea
          placeholder="Write your feedback about the event..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          type="button"
          className="btn"
          onClick={submitFeedback}
        >
          Submit Feedback
        </button>
      </div>

    </div>
  );
}

export default EventDetails;