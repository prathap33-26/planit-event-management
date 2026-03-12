function TaskCard({description,status}){

return(

<div className="event-card">

<h3>{description}</h3>

<p>Status : {status}</p>

</div>

)

}

export default TaskCard;