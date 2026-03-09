import httpService from "./httpService";

export const getTasks = ()=>{
 return httpService.get("/tasks");
};

export const createTask = (data)=>{
 return httpService.post("/tasks",data);
};

export const updateTask = (id,data)=>{
 return httpService.put(`/tasks/${id}`,data);
};

export const deleteTask = (id)=>{
 return httpService.delete(`/tasks/${id}`);
};
