import { useState } from "react";
import { createVenue } from "../../api/venueService";
import { useNavigate } from "react-router-dom";

function VenueForm() {
  const [venue, setVenue] = useState({
    name: "",
    location: "",
    capacity: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setVenue({
      ...venue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...venue,
      capacity: Number(venue.capacity)
    };

    createVenue(payload)
      .then(() => navigate("/venues"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Venue</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input name="capacity" placeholder="Capacity" onChange={handleChange} required />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default VenueForm;
