import { useState } from "react";
import { createOrganizer } from "../../api/organizerService";
import { useNavigate } from "react-router-dom";

function OrganizerForm() {
  const [organizer, setOrganizer] = useState({
    name: "",
    email: "",
    organization: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrganizer({
      ...organizer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createOrganizer(organizer)
      .then(() => navigate("/organizers"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Organizer</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="organization" placeholder="Organization" onChange={handleChange} required />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default OrganizerForm;
