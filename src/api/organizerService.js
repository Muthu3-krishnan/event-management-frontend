import axios from "axios";

const BASE_URL = "http://localhost:8080/organizer";

export const getAllOrganizers = () => {
  return axios.get(BASE_URL);
};

export const createOrganizer = (organizer) => {
  return axios.post(
    BASE_URL,
    organizer,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const deleteOrganizer = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
