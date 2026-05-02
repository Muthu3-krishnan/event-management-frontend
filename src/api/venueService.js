import axios from "axios";

const BASE_URL = "https://event-management-backend-xm3l.onrender.com/attendee";

export const getAllVenues = () => {
  return axios.get(BASE_URL);
};

export const createVenue = (venue) => {
  return axios.post(
    BASE_URL,
    venue,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const deleteVenue = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
