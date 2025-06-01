import React from "react";
import { useLocation } from "react-router-dom";

const CertificateRedirect = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("q"); // gets 'NPTEL123'

  const handleViewCertificate = () => {
    if (code) {
      window.open(`/certificates/${code}.pdf`, "_blank");
    } else {
      alert("Invalid certificate code.");
    }
  };

  return (
    <div
      style={{ position: "relative", height: "100vh", backgroundColor: "#fff" }}
    >
      <button
        onClick={handleViewCertificate}
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#3070bf",
          color: "white",
          padding: "12px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          width: "200px",
          fontSize: "16px",
          fontFamily: "'Nimbus Roman No9 L', 'Times New Roman', serif",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        Course Certificate
      </button>
    </div>
  );
};

export default CertificateRedirect;
