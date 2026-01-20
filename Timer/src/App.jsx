import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);


  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const centiseconds = Math.floor((timeInMs % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    setIsStopped(false);
    const startTime = Date.now() - time;
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 15);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsStopped(true);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
    setIsStopped(false);
  };

  const closeTimer = () => {
    clearInterval(timerRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="stopwatch-screen">
      <div className="glass-card">
        {/* Requirement: Close icon */}
        <button className="exit-btn" onClick={closeTimer}>&times;</button>
        
        {/* Centered Title */}
        <h1 className="main-title">Stopwatch</h1>
        
        {/* High-Contrast Timer Display */}
        <div className="time-box">
          <span className="numbers">{formatTime(time)}</span>
        </div>

        <div className="button-wrapper">
          {/* Start State */}
          {!isRunning && !isStopped && (
            <button className="action-btn start-theme" onClick={startTimer}>Start</button>
          )}

          {/* Stop State */}
          {isRunning && (
            <button className="action-btn stop-theme" onClick={stopTimer}>Stop</button>
          )}

          {/* Resume and Reset State */}
          {isStopped && (
            <div className="multi-buttons">
              <button className="action-btn resume-theme" onClick={startTimer}>Resume</button>
              <button className="action-btn reset-theme" onClick={resetTimer}>Reset</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
