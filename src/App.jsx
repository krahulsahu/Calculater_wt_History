import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculater from "./Calculater";
import HistoryPage from "./HistoryPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navigation">
        <Link to="/">Calculator</Link>
        <Link to="/history">History</Link>
      </div>
      <Routes>
        <Route path="/" element={<Calculater />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
