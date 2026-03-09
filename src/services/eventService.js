import httpService from "./httpService";

export const getEvents = ()=>{
 return httpService.get("/events");
};

export const createEvent = (data)=>{
 return httpService.post("/events",data);
};

export const deleteEvent = (id)=>{
 return httpService.delete(`/events/${id}`);
};
