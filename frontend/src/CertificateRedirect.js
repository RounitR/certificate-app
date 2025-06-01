import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CertificateRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("q"); // gets ?q=NPTEL123

  const handleRedirect = () => {
    if (code) {
      navigate(`/certificate/${code}`);
    } else {
      alert("Invalid or missing certificate code.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={handleRedirect}
        style={{
          backgroundColor: "#3070bf",
          color: "white",
          padding: "12px 30px",
          borderRadius: "8px",
          width: "200px",
          fontSize: "16px",
          fontFamily: "'Nimbus Roman No9 L', 'Times New Roman', serif",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        Course Certificate
      </button>
    </div>
  );
};

export default CertificateRedirect;
