import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize counter at 0
  const [count, setCount] = useState(0);
  // Default step value is 1
  const [step, setStep] = useState(1);

  const toggleStep = (val) => {
    // Updates step value based on user interaction
    setStep(step === val ? 1 : val);
  };

  return (
    <div className="counter-container">
      <div className="display-text">Count: {count}</div>

      <div className="step-label">Steps</div>
      <div className="step-wrapper">
        {[5, 10, 15].map((val) => (
          <div
            key={val}
            className={`step-box ${step === val ? 'selected' : ''}`}
            onClick={() => toggleStep(val)}
          >
            {val}
          </div>
        ))}
      </div>

      <div className="button-group">
        {/* Increases counter by selected step */}
        <button className="action-btn" onClick={() => setCount(count + step)}>
          Increment
        </button>
        {/* Decreases counter by selected step */}
        <button className="action-btn" onClick={() => setCount(count - step)}>
          Decrement
        </button>
        {/* Resets counter to 0 */}
        <button className="action-btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
