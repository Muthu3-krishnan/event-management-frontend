import axios from "axios";

const BASE_URL = "https://event-management-backend-xm3l.onrender.com/attendee";

export const getAllEvents = () => {
  return axios.get(BASE_URL);
};

export const createEvent = (event) => {
  return axios.post(
    BASE_URL,
    event,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const deleteEvent = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
