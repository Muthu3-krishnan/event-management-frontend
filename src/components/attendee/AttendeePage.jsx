import { useState } from "react";
import AttendeeForm from "./AttendeeForm";
import AttendeeList from "./AttendeeList";

function AttendeePage() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <h2 className="title">Attendee Management</h2>

      <div className="card">
        <h3>Add Attendee</h3>
        <AttendeeForm onSuccess={reload} />
      </div>

      <div className="card">
        <h3>Attendee List</h3>
        <AttendeeList refresh={refresh} />
      </div>
    </div>
  );
}

export default AttendeePage;
