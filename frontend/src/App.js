import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CertificatePage from "./CertificatePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            style={{ color: "#3070bf", textAlign: "center", marginTop: "40vh" }}
          >
            Welcome to Certificate Portal
          </div>
        }
      />
      <Route path="/certificate/:id" element={<Home />} />
      <Route path="/certificate/:id/view" element={<CertificatePage />} />
    </Routes>
  );
}

export default App;
