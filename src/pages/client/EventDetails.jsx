import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/client.css";

const BASE_URL = "http://localhost:8080/client";

function EventDetails(){

const { id } = useParams();

const [event,setEvent] = useState({});
const [feedback,setFeedback] = useState("");

/* Fetch Event Details */

useEffect(()=>{

fetch(BASE_URL + "/getevents")
.then(res => res.json())
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

fetch(BASE_URL + "/event/" + id + "?feedback=" + feedback,{
method:"PUT"
})
.then(res=>res.json())
.then(()=>{
alert("Feedback Submitted Successfully");
setFeedback("");
})
.catch(err=>console.log(err));

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
