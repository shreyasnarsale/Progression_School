import React, { useState, useEffect } from 'react';
import './App.css';

const URL = 'https://randomuser.me/api/';

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [displayValue, setDisplayValue] = useState(''); 
  const [displayLabel, setDisplayLabel] = useState('name'); 

  const fetchPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const p = data.results[0];

      const newPerson = {
        image: p.picture.large,
        name: `${p.name.first} ${p.name.last}`,
        username: p.login.username,
        email: p.email,
        dob: `${new Date(p.dob.date).toLocaleDateString()} (${p.dob.age} years)`,
        location: `${p.location.city}, ${p.location.country}`,
        phone: p.phone,
        password: p.login.password,
      };

      setPerson(newPerson);
      setDisplayValue(newPerson.name);
      setDisplayLabel('name');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPerson(); }, []);

  const handleSelection = (label, value) => {
    setDisplayLabel(label);
    setDisplayValue(value);
  };

  if (loading) return <div className="viewport"><div className="spinner"></div></div>;

  const infoItems = [
    { label: 'name', icon: '👤', value: person.name },
    { label: 'username', icon: '🆔', value: person.username },
    { label: 'email', icon: '✉️', value: person.email },
    { label: 'birthday', icon: '📅', value: person.dob },
    { label: 'location', icon: '📍', value: person.location },
    { label: 'phone', icon: '📞', value: person.phone },
    { label: 'password', icon: '🔒', value: person.password },
  ];

  return (
    <div className="viewport">
      <div className="card">
        <div className="card-header">
          <div className="image-circle">
            <img src={person.image} alt="profile" />
          </div>
        </div>

        <div className="card-body">
          {/* THE DYNAMIC TOP DISPLAY AREA */}
          <div className="display-area">
            <p className="display-label">My {displayLabel} is</p>
            <h1 className="display-main">{displayValue}</h1>
          </div>

          {/* THE CLICKABLE LIST */}
          <ul className="info-list">
            {infoItems.map((item, index) => (
              <li 
                key={index} 
                className={`info-item ${displayLabel === item.label ? 'active' : ''}`}
                onClick={() => handleSelection(item.label, item.value)}
              >
                <span className="icon-box">{item.icon}</span>
                <span className="text-content">{item.value}</span>
              </li>
            ))}
          </ul>

          <button className="get-btn" onClick={fetchPerson}>Get Random Person</button>
        </div>
      </div>
    </div>
  );
}

export default App;
