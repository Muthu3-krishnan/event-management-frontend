import { useEffect, useState } from "react";
import { getAllRegistrations, deleteRegistration } from "../../api/registrationService";
import { useNavigate } from "react-router-dom";

function RegistrationList() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = async () => {
    try {
      setLoading(true);
      const res = await getAllRegistrations();

      // Normalize data to avoid undefined errors
      const normalized = (res.data?.data || []).map((r) => ({
        ...r,
        attendee: r.attendee || { name: "Unknown" },
        event: r.event || { title: "Unknown" }
      }));

      setRegistrations(normalized);
    } catch (err) {
      console.error("Error loading registrations:", err);
      alert("Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this registration?");
    if (!confirmDelete) return;

    try {
      await deleteRegistration(id);
      loadRegistrations(); // refresh list
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete registration");
    }
  };

  return (
    <div>
      <h2>Registrations</h2>

      <button onClick={() => navigate("/registrations/new")}>
        Add Registration
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <ul>
          {registrations.map((r) => (
            <li key={r.id}>
              Attendee: {r.attendee.name} | Event: {r.event.title}
              <button onClick={() => handleDelete(r.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistrationList;
