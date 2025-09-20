const express = require("express");
const router = express.Router();
const Candidate = require("../models/candidateModel"); // adjust path if needed

// GET all candidate applications
router.get("/", async (req, res) => {
  try {
    const applications = await Candidate.find(); // fetch all documents
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching applications", error: err });
  }
});
module.exports = router;