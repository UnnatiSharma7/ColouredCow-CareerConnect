const Candidate = require("../models/candidateModel");
const sendEmail = require("../utils/sendEmail");

const submitApplication = async (req, res) => {
  try {
    console.log(req.file.path);
    // Combine form data (req.body) + resume URL (req.file.path)
    const newCandidate = new Candidate({
      ...req.body,          // all text fields (name, email, phone, etc.)
      resume: req.file?.path // Cloudinary URL (if a file was uploaded)
    });

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
