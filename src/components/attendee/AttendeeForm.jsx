import { useState } from "react";
import api from "../../api/axiosConfig";

function AttendeeForm({ onSuccess }) {
  const [attendee, setAttendee] = useState({
    name: "",
    email: "",
    contact: ""
  });

  const handleChange = (e) => {
    setAttendee({ ...attendee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/attendee", attendee)
      .then(() => {
        setAttendee({ name: "", email: "", contact: "" });
        onSuccess();
      })
      .catch(err => console.error(err));
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={attendee.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={attendee.email} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={attendee.contact} onChange={handleChange} />
      <button type="submit" className="btn-primary">Add Attendee</button>
    </form>
  );
}

export default AttendeeForm;
