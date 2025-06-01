import React from "react";
import { useParams } from "react-router-dom";

const CertificatePage = () => {
  const { id } = useParams();

  const handleViewCertificate = () => {
    window.open(`${process.env.PUBLIC_URL}/certificates/${id}.pdf`, "_blank");

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
          width: "200px", // ⬅️ Increased width
          fontSize: "16px",
          fontFamily: "Times New Roman, serif",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap", // ⬅️ Prevents text wrapping
          textAlign: "center",
        }}
      >
        Course Certificate
      </button>
    </div>
  );
};

export default CertificatePage;
