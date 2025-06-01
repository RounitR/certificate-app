import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CertificatePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("q");

  useEffect(() => {
    // Set document title to the full URL path
    document.title = window.location.href;
  }, []);

  const handleViewCertificate = () => {
    window.open(`${process.env.PUBLIC_URL}/certificates/${id}.pdf`, "_blank");
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#fff",
      }}
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
          fontFamily: "Times New Roman, serif",
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

export default CertificatePage;
