import { useEffect, useState } from "react";
import { getAllRegistrations, deleteRegistration } from "../../api/registrationService";
import { useNavigate } from "react-router-dom";

function RegistrationList() {
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = () => {
    getAllRegistrations()
      .then(res => setRegistrations(res.data.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this registration?")) {
      deleteRegistration(id).then(() => loadRegistrations());
    }
  };

  return (
    <div>
      <h2>Registrations</h2>

      <button onClick={() => navigate("/registrations/new")}>
        Add Registration
      </button>

      <ul>
        {registrations.map(r => (
          <li key={r.id}>
            Attendee: {r.attendee.name} | Event: {r.event.title}
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistrationList;
