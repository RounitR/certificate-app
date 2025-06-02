import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CertificateRedirect = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("q"); // gets 'NPTEL123'

  useEffect(() => {
    const currentHost = window.location.hostname;
    if (currentHost === "nptel.cc" && code) {
      const newUrl = `https://internalapp.nptel.cc/noc/Ecertificate?q=${code}`;
      window.location.href = newUrl;
    }
  }, [code]);

  const handleViewCertificate = () => {
    if (code) {
      window.open(
        `/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/${code}.pdf`,
        "_blank"
      );
    } else {
      alert("Invalid certificate code.");
    }
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

export default CertificateRedirect;
