import { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "../../api/eventService";
import { useNavigate } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    getAllEvents()
      .then(res => setEvents(res.data.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this event?")) {
      deleteEvent(id).then(() => loadEvents());
    }
  };

  return (
    <div>
      <h2>Event List</h2>

      <button onClick={() => navigate("/events/new")}>
        Add Event
      </button>

      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.title} | {e.eventDate}
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
