import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <Link to="/users" className="back-btn">← Back to Users</Link>

      <div className="user-details-card">
        <div className="user-details-header">
          <FaUserCircle className="user-details-avatar" />
          <div>
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h4>Contact Information</h4>
            <p>📧 {user.email}</p>
            <p>📞 {user.phone}</p>
            <p>🌐 {user.website}</p>
          </div>

          <div>
            <h4>Address</h4>
            <p>
              {user.address.street}, {user.address.city}
            </p>
          </div>
        </div>

        <div className="company-box">
          <h4>Company</h4>
          <p><strong>{user.company.name}</strong></p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </>
  );
}
