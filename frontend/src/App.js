import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CertificatePage from "./CertificatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/certificate/:id" element={<CertificatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
