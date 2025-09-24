const mongoose = require("mongoose");

const hrSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // no two HRs with same email
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // recommended
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HR", hrSchema);

