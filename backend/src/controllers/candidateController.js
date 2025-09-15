const Candidate = require("../models/candidateModel");
const sendEmail = require("../utils/sendEmail");

const submitApplication = async (req, res) => {
  try {
    console.log(req.body.email);
    const newCandidate = new Candidate(req.body);
    await newCandidate.save();

    // Send confirmation email
    await sendEmail(
      newCandidate.email,
      "Application Received",
      "Thank you for applying! Our team will review your application soon."
    );

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitApplication };
