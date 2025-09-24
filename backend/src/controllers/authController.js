const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const HrUser = require("../models/hrSchema");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await HrUser.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new HrUser({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await HrUser.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    // console.log("token in authController is: ",token);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
