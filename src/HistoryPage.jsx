import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="history-page">
        <h2>Calculation History</h2>
        <button onClick={clearHistory}>Clear History</button>
        <div className="history">
          <ul>
            {history.length > 0 ? (
              history.map((item, index) => (
                <li key={index}>
                  <span className="serial-number">{index + 1}.</span> {item}
                </li>
              ))
            ) : (
              <li>No history available</li>
            )}
          </ul>
        </div>
        <Link to="/">Back to Calculator</Link>
      </div>
    </div>
  );
}

export default HistoryPage;
