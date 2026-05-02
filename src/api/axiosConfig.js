import axios from "axios";

const api = axios.create({
  baseURL: "https://event-management-backend-xm3l.onrender.com"
});

export default api;
