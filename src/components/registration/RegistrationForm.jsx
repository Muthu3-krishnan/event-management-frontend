import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";

function RegistrationForm() {
  const [attendees, setAttendees] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  const [registration, setRegistration] = useState({
    attendeeId: "",
    eventId: ""
  });

  const navigate = useNavigate();

  // Load attendees & events
  useEffect(() => {
    api.get("/attendee")
      .then(res => setAttendees(res.data.data))
      .catch(err => {
        console.error("Attendee fetch error", err);
        setAttendees([]);
      });

    api.get("/event")
      .then(res => setEvents(res.data.data))
      .catch(err => {
        console.error("Event fetch error", err);
        setEvents([]);
      });
  }, []);

  const handleChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      attendee: { id: registration.attendeeId },
      event: { id: registration.eventId }
    };

    api.post("/registration", payload)
      .then(() => {
        alert("Registration successful");
        navigate("/registrations");
      })
      .catch(err => {
        console.error("Registration error", err);

        if (err.response && err.response.status === 409) {
          setError("Attendee already registered for this event");
        } else {
          setError("Registration failed. Please try again.");
        }
      });
  };

  return (
    <div>
      <h2>Register Attendee</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <select name="attendeeId" onChange={handleChange} required>
            <option value="">Select Attendee</option>
            {attendees.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select name="eventId" onChange={handleChange} required>
            <option value="">Select Event</option>
            {events.map(e => (
              <option key={e.id} value={e.id}>
                {e.title}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
