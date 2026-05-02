import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const links = [
    { to: "/attendees",     label: "Attendees" },
    { to: "/organizers",    label: "Organizers" },
    { to: "/venues",        label: "Venues" },
    { to: "/events",        label: "Events" },
    { to: "/registrations", label: "Registrations" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-icon">🎪</span>
          <span className="brand-text">EventHub</span>
        </NavLink>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
