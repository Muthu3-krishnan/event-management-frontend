import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AttendeePage from "./components/attendee/AttendeePage";
import OrganizerList from "./components/organizer/OrganizerList";
import OrganizerForm from "./components/organizer/OrganizerForm";
import VenueList from "./components/venue/VenueList";
import VenueForm from "./components/venue/VenueForm";
import EventList from "./components/event/EventList";
import EventForm from "./components/event/EventForm";
import RegistrationList from "./components/registration/RegistrationList";
import RegistrationForm from "./components/registration/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Event Management App</h2>} />

        {/* ✅ Attendee (Form + List together) */}
        <Route path="/attendees" element={<AttendeePage />} />

        {/* Organizer */}
        <Route path="/organizers" element={<OrganizerList />} />
        <Route path="/organizers/new" element={<OrganizerForm />} />

        {/* Venue */}
        <Route path="/venues" element={<VenueList />} />
        <Route path="/venues/new" element={<VenueForm />} />

        {/* Event */}
        <Route path="/events" element={<EventList />} />
        <Route path="/events/new" element={<EventForm />} />

        {/* Registration */}
        <Route path="/registrations" element={<RegistrationList />} />
        <Route path="/registrations/new" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
