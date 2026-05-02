import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import AttendeePage from "./components/attendee/AttendeePage";
import OrganizerList from "./components/organizer/OrganizerList";
import OrganizerForm from "./components/organizer/OrganizerForm";
import VenueList from "./components/venue/VenueList";
import VenueForm from "./components/venue/VenueForm";
import EventList from "./components/event/EventList";
import EventForm from "./components/event/EventForm";
import RegistrationList from "./components/registration/RegistrationList";
import RegistrationForm from "./components/registration/RegistrationForm";

function HomePage() {
  return (
    <div className="container">
      <div className="home-hero">
        <h1 className="home-title">Event Management System</h1>
        <p className="home-subtitle">
          Manage your attendees, organizers, venues, events, and registrations all in one place.
        </p>
        <div className="home-cards">
          {[
            { label: "Attendees",     path: "/attendees",     icon: "👥" },
            { label: "Organizers",    path: "/organizers",    icon: "🧑‍💼" },
            { label: "Venues",        path: "/venues",        icon: "🏛️" },
            { label: "Events",        path: "/events",        icon: "📅" },
            { label: "Registrations", path: "/registrations", icon: "📋" },
          ].map((item) => (
            <a key={item.path} href={item.path} className="home-card">
              <span className="home-card-icon">{item.icon}</span>
              <span className="home-card-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Attendee */}
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