import React from 'react';
import Button from './Button';
import './App.css';

function App() {
  // Handler for Scenario 3
  const handleAlert = () => alert("This is a custom message!");
  
  // Generic handler for Scenarios 1 & 2
  const handleLog = () => console.log("Button interaction triggered.");

  return (
    <div className="app-container">
      <div className="button-card">
        <h1>Button Design System</h1>

        {/* Scenario 1: Only label specified */}
        <div className="scenario-item">
          <span>Scenario 1: Default (Medium Primary)</span>
          <Button label="Submit Only" onClickHandler={handleLog} />
        </div>

        {/* Scenario 2: Small size, Secondary type, and label */}
        <div className="scenario-item">
          <span>Scenario 2: Small Secondary</span>
          <Button 
            label="Save Changes" 
            size="SMALL" 
            type="SECONDARY" 
            onClickHandler={handleLog} 
          />
        </div>

        {/* Scenario 3: Large size, Tertiary type, onClick alert */}
        <div className="scenario-item">
          <span>Scenario 3: Large Tertiary Alert</span>
          <Button 
            label="Launch Alert" 
            size="LARGE" 
            type="TERTIARY" 
            onClickHandler={handleAlert} 
          />
        </div>

        {/* Distinct Disabled Button Requirement */}
        <div className="scenario-item">
          <span>Disabled State</span>
          <Button 
            label="Inactive Button" 
            disabled={true} 
            onClickHandler={handleLog} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;