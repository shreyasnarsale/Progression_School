import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">React Router App</h2>

      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
        🏠 Home
      </NavLink>

      <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
        👥 Users
      </NavLink>

      <NavLink to="/quotes" className={({ isActive }) => isActive ? "active" : ""}>
        💬 Quotes
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
        📞 Contact
      </NavLink>
    </aside>
  );
}
