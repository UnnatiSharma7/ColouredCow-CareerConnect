// server.js
const express= require("express");
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const cors=require("cors");
const Candidate=require("./src/models/candidateModel");
const candidateRoutes = require("./src/routes/candidateRoutes");
const applicationsRoutes = require("./src/routes/applicationsRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Atlas connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use("/api/candidates", candidateRoutes);

// Get the submitted applications of all the candidates
app.use("/api/applications",applicationsRoutes);

// PUT /applications/:id/status
app.put("/application/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const updated = await Candidate.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
