import React from 'react';
import './App.css';

function App() {
  const vegetables = [
    { id: 'carrot', value: '🥕 carrot' },
    { id: 'tomato', value: '🍅 tomato' },
    { id: 'pepper', value: '🌶️ pepper' },
    { id: 'lettuce', value: '🥬 lettuce' },
  ];

  const handleStarkClick = (name) => alert(`Hello ${name}`);

  return (
    <div className="full-page-container">
      <div className="content-wrapper">
        <h1 className="main-title">React Events Workshop</h1>
        <hr className="divider" />

        {/* Section 1 & 2 */}
        <h3>Simple & Sequential Alerts</h3>
        <div className="button-group">
          <button className="blue-btn" onClick={() => alert('Welcome to React Events')}>
            Press Here
          </button>
          <button className="blue-btn" onClick={() => {
            alert("Visit the official React documentation at https://reactjs.org");
            alert("Understand the collaboration between React and ReactDOM");
            alert("Learn how JSX is transformed by Babel");
          }}>
            Need Assistance?
          </button>
        </div>

        {/* Section 3 */}
        <h3>Unified Handling (The Starks)</h3>
        <div className="button-group">
          {['Sansa', 'Robb', 'Rickon'].map((name) => (
            <button 
              key={name} 
              className="blue-btn" 
              onClick={() => handleStarkClick(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Section 4 */}
        <h3>Dynamic Veggie List</h3>
        <div className="button-group">
          {vegetables.map((veg) => (
            <button 
              key={veg.id} 
              className="veggie-btn" 
              onClick={() => alert(veg.id)}
            >
              {veg.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
