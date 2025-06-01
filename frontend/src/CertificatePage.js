import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CertificatePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("q");

  useEffect(() => {
    // Set the page title to the full URL
    document.title = window.location.href;
  }, []);

  const handleViewCertificate = () => {
    window.open(`${process.env.PUBLIC_URL}/certificates/${id}.pdf`, "_blank");
  };

  return (
    <>
      <style>
        {`
          @media screen and (max-width: 600px) {
            .responsive-button {
              width: 80px !important;
              padding: 4px 12px !important;
              font-size: 6px !important;
              border-radius: 4px !important;
            }
          }
        `}
      </style>
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            onClick={handleViewCertificate}
            className="responsive-button"
            style={{
              color: "white",
              backgroundColor: "#3070bf",
              padding: "11px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              width: "200px",
              fontFamily: "Times New Roman, serif",
              fontSize: "15px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Course Certificate
          </button>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
