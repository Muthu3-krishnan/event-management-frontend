import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";

function AttendeeList({ refresh }) {
  const [attendees, setAttendees] = useState([]);

  const loadAttendees = async () => {
    try {
      const res = await api.get("/attendee");
      setAttendees(res.data.data || []);
    } catch (err) {
      console.error("Fetch attendee error", err);
    }
  };

  useEffect(() => {
    loadAttendees();
  }, [refresh]);

  const deleteAttendee = async (id) => {
    if (!window.confirm("Delete this attendee?")) return;

    try {
      await api.delete(`/attendee/${id}`);
      loadAttendees();
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {attendees.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No attendees found
              </td>
            </tr>
          ) : (
            attendees.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.contact}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAttendee(a.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendeeList;
