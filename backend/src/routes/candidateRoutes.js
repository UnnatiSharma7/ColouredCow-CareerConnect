const express = require("express");
const { submitApplication } = require("../controllers/candidateController.js");

const router = express.Router();

router.post("/apply", submitApplication);

module.exports = router;
