const express = require("express");
const { submitApplication } = require("../controllers/candidateController");
const upload = require("../middlewares/upload");

const router = express.Router();

// "resume" must match frontend <input name="resume" />
router.post("/apply", upload.single("resume"), submitApplication);

module.exports = router;
