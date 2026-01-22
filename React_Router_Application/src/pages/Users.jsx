import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h1 className="page-title">Users</h1>

      {/* GRID IS REQUIRED */}
      <div className="card-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            {/* Avatar */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#e0edff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                color: "#2563eb",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              👤
            </div>

            {/* Name */}
            <h3>{user.name}</h3>

            {/* Info */}
            <p>📧 {user.email}</p>
            <p>🌐 {user.website}</p>

            {/* Button */}
            <Link to={`/users/${user.id}`} className="btn">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
