import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/client.css";

const BASE_URL = "http://localhost:8080/client";

function EventDetails(){

const { id } = useParams();

const [event, setEvent] = useState(null);
const [feedback, setFeedback] = useState("");

/* Fetch Event Details */

useEffect(()=>{

fetch(BASE_URL + "/getevents")
.then(res => {
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
})
.then(data => {

const selectedEvent = data.find(e => e.id == id);
setEvent(selectedEvent);

})
.catch(err => console.log(err));

},[id]);

/* Submit Feedback */

const submitFeedback = () => {

  if(!feedback){
    alert("Please enter feedback");
    return;
  }

  const url = `${BASE_URL}/event/${id}?feedback=${encodeURIComponent(feedback)}`;
  
  console.log("Calling URL:", url);   // check this in browser console

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    console.log("Response status:", res.status);   // check this too
    if(!res.ok) throw new Error("Server error: " + res.status);
    return res.json();
  })
  .then((updatedEvent) => {
    console.log("Updated event:", updatedEvent);
    setEvent(updatedEvent);
    alert("Feedback Submitted Successfully");
    setFeedback("");
  })
  .catch(err => {
    console.log("Error:", err);
    alert("Failed: " + err.message);
  });

};

return(

<div className="event-details-container">

{/* Event Information */}

<div className="event-info-card">

<h2>{event?.title}</h2>

<p><b>Date:</b> {event?.date}</p>

<p><b>Location:</b> {event?.location}</p>

<p><b>Status:</b> {event?.status}</p>

<p>{event?.description}</p>

</div>

{/* Feedback Section */}

<div className="card">

<h3>Submit Feedback</h3>

<textarea
placeholder="Write your feedback about the event..."
value={feedback}
onChange={(e)=>setFeedback(e.target.value)}
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

)

}

export default EventDetails;
