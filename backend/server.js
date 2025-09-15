// server.js
const express= require("express");
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const cors=require("cors");
const candidateRoutes = require("./src/routes/candidateRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/candidates", candidateRoutes);


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

// Example Route
app.get("/", (req, res) => {
  res.send("Hiring Dashboard Backend is running...");
});

app.get("/newPath", (req,res) => {
  res.send("New testing path....");
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
