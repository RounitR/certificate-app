const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");

// Add certificate (for testing or admin use)
router.post("/add", async (req, res) => {
  try {
    const { name, course, certificateUrl, uniqueId } = req.body;

    const newCert = new Certificate({
      name,
      course,
      certificateUrl,
      uniqueId,
    });

    await newCert.save();
    res.status(201).json({ message: "Certificate added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get certificate by uniqueId
router.get("/:uniqueId", async (req, res) => {
  try {
    const cert = await Certificate.findOne({ uniqueId: req.params.uniqueId });
    if (!cert) return res.status(404).json({ error: "Certificate not found" });

    res.json(cert);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
