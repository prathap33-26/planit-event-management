import axios from "axios";

const httpService = axios.create({
 baseURL: "http://localhost:8080/api",
});

httpService.interceptors.request.use(
 config => {
  const token = localStorage.getItem("token");
  if(token){
   config.headers.Authorization = "Bearer " + token;
  }
  return config;
 },
 error => Promise.reject(error)
);

httpService.interceptors.response.use(
 response => response,
 error => {
  console.error("API Error:", error.response?.data || error.message);
  return Promise.reject(error);
 }
);

export default httpService;
