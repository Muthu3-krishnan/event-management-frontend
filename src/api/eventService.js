import axios from "axios";

const BASE_URL = "http://localhost:8080/event";

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
