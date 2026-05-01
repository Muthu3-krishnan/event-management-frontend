import { useEffect, useState } from "react";
import { createEvent } from "../../api/eventService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const [venues, setVenues] = useState([]);
  const [organizers, setOrganizers] = useState([]);

  const [event, setEvent] = useState({
    title: "",
    eventDate: "",
    description: "",
    venueId: "",
    organizerId: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/venue")
      .then(res => setVenues(res.data.data));

    axios.get("http://localhost:8080/organizer")
      .then(res => setOrganizers(res.data.data));
  }, []);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: event.title,
      eventDate: event.eventDate,
      description: event.description,
      venue: { id: event.venueId },
      organizer: { id: event.organizerId }
    };

    createEvent(payload)
      .then(() => navigate("/events"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Create Event</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input type="date" name="eventDate" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />

        <select name="venueId" onChange={handleChange} required>
          <option value="">Select Venue</option>
          {venues.map(v => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>

        <select name="organizerId" onChange={handleChange} required>
          <option value="">Select Organizer</option>
          {organizers.map(o => (
            <option key={o.id} value={o.id}>{o.name}</option>
          ))}
        </select>

        <button type="submit">Save Event</button>
      </form>
    </div>
  );
}

export default EventForm;
