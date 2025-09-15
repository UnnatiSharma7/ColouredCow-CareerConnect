import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

function CandidateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    college: "",
    graduationYear: "",
    jobRole: "",
    resume: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  //https://colouredcow-careerconnect.onrender.com

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API_URL);
    await fetch(`${process.env.REACT_APP_API_URL}/api/candidates/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    alert("Application Submitted! Check your email.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      {/* Card-like container */}
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #3f51b5, #1e88e5)",
            color: "white",
            textAlign: "center",
            py: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Candidate Application Form
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Fill out the details below to apply
          </Typography>
        </Box>

        {/* Form Section */}
        <Box sx={{ p: { xs: 3, sm: 5 } }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="College"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Grad Year"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                >
                  {[2023, 2024, 2025, 2026].map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Job Role"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                >
                  {["Frontend Developer", "Backend Developer", "Fullstack"].map(
                    (role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Resume (URL)"
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
                    color: "white",
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1565c0, #1e88e5)",
                      transform: "translateY(-2px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default CandidateForm;
