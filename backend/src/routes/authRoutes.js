// routes/authRoutes.js
const express = require("express");
const { login ,signup} = require("../controllers/authController");

const router = express.Router();

// this will match POST /login
router.post("/login", login);
router.post("/signup",signup);

module.exports = router;
