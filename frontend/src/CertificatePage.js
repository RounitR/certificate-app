import React from "react";
import { useSearchParams } from "react-router-dom";

const CertificatePage = () => {
  const [searchParams] = useSearchParams();
  const certId = searchParams.get("q");

  // Map certificate IDs to Google Drive file IDs
  const certificateMap = {
    NPTEL123: "1kckPc4gX8tfVcnSUhrbaw3tl8FDOC13G",
    NPTEL456: "1-2drQtnPED3Dz3VndL3kYC3acGuUpFtC",
    NPTEL789: "1TZfgszKjUJb0jtl4mgE37gFwMbzisQQW",
  };

  const handleViewCertificate = () => {
    const fileId = certificateMap[certId];
    if (fileId) {
      const pdfUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(pdfUrl, "_blank");
    } else {
      alert("Certificate not found.");
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
