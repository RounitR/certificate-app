import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CertificatePage from "./CertificatePage";

function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40vh",
        fontSize: "24px",
        color: "#3070bf",
      }}
    >
      Welcome to the Certificate Portal
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificate/:id" element={<CertificatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
