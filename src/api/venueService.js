import axios from "axios";

const BASE_URL = "http://localhost:8080/venue";

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
