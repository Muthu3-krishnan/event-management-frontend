import axios from "axios";

const BASE_URL = "https://event-management-backend-xm3l.onrender.com/venue";

export const getAllRegistrations = () => {
  return axios.get(BASE_URL);
};

export const createRegistration = (registration) => {
  return axios.post(
    BASE_URL,
    registration,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const deleteRegistration = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
