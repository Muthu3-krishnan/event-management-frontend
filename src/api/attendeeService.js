import axios from "axios";

const BASE_URL = "http://localhost:8080/attendee";

export const getAllAttendees = () => {
  return axios.get(BASE_URL);
};

export const createAttendee = (attendee) => {
  return axios.post(BASE_URL, attendee);
};

export const deleteAttendee = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
