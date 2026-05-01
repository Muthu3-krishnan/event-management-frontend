import { useEffect, useState } from "react";
import { getAllVenues, deleteVenue } from "../../api/venueService";
import { useNavigate } from "react-router-dom";

function VenueList() {
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadVenues();
  }, []);

  const loadVenues = () => {
    getAllVenues()
      .then(res => setVenues(res.data.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this venue?")) {
      deleteVenue(id).then(() => loadVenues());
    }
  };

  return (
    <div>
      <h2>Venue List</h2>

      <button onClick={() => navigate("/venues/new")}>
        Add Venue
      </button>

      <ul>
        {venues.map(v => (
          <li key={v.id}>
            {v.name} | {v.location} | Capacity: {v.capacity}
            <button onClick={() => handleDelete(v.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenueList;
