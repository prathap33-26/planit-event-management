import React, { useState } from "react";

const FeedbackForm = ({ eventId }) => {

  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      eventId,
      feedback,
      rating
    };

    console.log("Feedback Submitted:", feedbackData);

    alert("Feedback submitted successfully!");

    setFeedback("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>

      <div style={{ marginBottom: "10px" }}>
        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="">Select Rating</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Good</option>
          <option value="3">⭐⭐⭐ Average</option>
          <option value="2">⭐⭐ Poor</option>
          <option value="1">⭐ Very Bad</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Feedback</label>
        <textarea
          rows="4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit Feedback</button>

    </form>
  );
};

export default FeedbackForm;