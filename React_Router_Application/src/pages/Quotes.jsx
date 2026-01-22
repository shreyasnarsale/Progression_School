import { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data.quotes));
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Inspirational Quotes</h1>
        <button className="btn" onClick={() => window.location.reload()}>
          🔄 Refresh
        </button>
      </div>

      <div className="grid">
        {quotes.map(q => (
          <div className="card" key={q.id}>
            <div style={{ fontSize: "30px", color: "#3b82f6" }}>❝</div>

            <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
              {q.quote}
            </p>

            <strong>— {q.author}</strong>
          </div>
        ))}
      </div>
    </>
  );
}
