import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Define the dataset
  const languageDetails = {
    JavaScript: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification.",
    Python: "Python is an interpreted, high-level and general-purpose programming language, known for its easy readability with great design philosophy.",
    Ruby: "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity.",
    Java: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    CSharp: "C# is a modern, object-oriented, and type-safe programming language derived from C and C++.",
    Go: "Go is a statically typed, compiled programming language designed at Google known for its simplicity and efficiency."
  };

  // 2. Set up state (Defaults to JavaScript)
  const [activeLang, setActiveLang] = useState('JavaScript');

  return (
    <div className="main-container">
      <header>
        <h1 style={{fontSize: '2.5rem', color: '#2c3e50'}}>Language Information Portal</h1>
      </header>

      <div className="app-layout">
        {/* ButtonContainer Component */}
        <div className="button-container">
          {Object.keys(languageDetails).map((lang) => (
            <button
              key={lang}
              className={`lang-btn ${activeLang === lang ? 'active' : ''}`}
              onClick={() => setActiveLang(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* DisplayArea Component */}
        <div className="display-area">
          <p>{languageDetails[activeLang]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
