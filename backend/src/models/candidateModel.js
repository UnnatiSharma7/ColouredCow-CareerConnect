const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
    college: String,
    graduationYear: Number,
    jobRole: String,
    resume: String, // store file URL if using cloud storage
    status: { type: String, default: "Pending" } // Pending | Approved | Rejected
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
