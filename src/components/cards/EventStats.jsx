function EventStats({title,date,location}){

return(

<div className="event-card">

<h3>{title}</h3>

<p>Date : {date}</p>

<p>Location : {location}</p>

<button className="btn">View Details</button>

</div>

)

}

export default EventStats;