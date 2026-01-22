import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-title">SecureApp</div>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>

        {isAuthenticated && (
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        )}

        {!isAuthenticated ? (
          <Link to="/login" className="nav-link">Login</Link>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
