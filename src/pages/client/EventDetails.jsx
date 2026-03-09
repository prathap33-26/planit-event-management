import React from "react";
import { useParams } from "react-router-dom";
import FeedbackForm from "../../components/forms/FeedbackForm";

const EventDetails = () => {

  const { id } = useParams();

  const event = {
    id: id,
    title: "Wedding Ceremony",
    date: "12 June 2026",
    location: "Hyderabad",
    description: "A beautiful wedding event organized by our team.",
    status: "Completed"
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Event Details</h2>

      <h3>{event.title}</h3>

      <p>Date: {event.date}</p>

      <p>Location: {event.location}</p>

      <p>Description: {event.description}</p>

      <p>Status: {event.status}</p>

      <hr />

      <h3>Give Your Feedback</h3>

      <FeedbackForm eventId={event.id} />

    </div>
  );
};

export default EventDetails;