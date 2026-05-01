import { useEffect, useState } from "react";
import { getAllOrganizers, deleteOrganizer } from "../../api/organizerService";
import { useNavigate } from "react-router-dom";

function OrganizerList() {
  const [organizers, setOrganizers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadOrganizers();
  }, []);

  const loadOrganizers = () => {
    getAllOrganizers()
      .then(res => {
        setOrganizers(res.data.data); // ResponseStructure
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this organizer?")) {
      deleteOrganizer(id).then(() => loadOrganizers());
    }
  };

  return (
    <div>
      <h2>Organizer List</h2>

      <button onClick={() => navigate("/organizers/new")}>
        Add Organizer
      </button>

      <ul>
        {organizers.map(o => (
          <li key={o.id}>
            {o.name} | {o.email} | {o.organization}
            <button onClick={() => handleDelete(o.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrganizerList;
