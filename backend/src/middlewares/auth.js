const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);
  if (!authHeader) return res.status(401).json({ error: "No token, access denied" });

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  if (!token) return res.status(401).json({ error: "No token, access denied" });

 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Decoded JWT:", decoded);
  req.user = decoded;
  next();
} catch (err) {
  console.error("JWT Verification Error:", err.message);
  console.error("Token Received:", token);
  console.error("Secret Used:", process.env.JWT_SECRET);
  return res.status(401).json({ error: "Invalid or expired token" });
}

};
