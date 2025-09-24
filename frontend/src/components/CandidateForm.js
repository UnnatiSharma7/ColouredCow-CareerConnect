import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  });
  const [resumeFile, setResumeFile] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (resumeFile) {
      data.append("resume", resumeFile);
    }

    await fetch(`${process.env.REACT_APP_API_URL}/api/candidates/apply`, {
      method: "POST",
      body: data, // don't set Content-Type; browser handles it
    });

    navigate("/thank-you");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20, mb: 6 }}>
      <Paper elevation={6} sx={{ borderRadius: 4, overflow: "hidden" }}>
        <Box
          sx={{
          color: "white",
          textAlign: "center",
          py: 4,
          background: "linear-gradient(135deg, #75be81, #3a810b, #75be81, #3a810b)",
          backgroundSize: "400% 400%",
          animation: "gradientFlow 15s ease infinite",
          "@keyframes gradientFlow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
          },
        }}
        >
          <Typography variant="h4" fontWeight="bold">
            ColouredCow Application Form
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Fill out the details below to apply
          </Typography>
        </Box>

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

              {/* Resume Upload */}
              <Grid 
              item 
              xs={12} 
              sx={{ 
              background: "linear-gradient(135deg, #75be81ff, #3a810bae)", 
              borderRadius: 3, 
              p: 0.5  // optional: padding around the button to see gradient outside 
             }}
            >
        <Button
        variant="contained"
        component="label"
        fullWidth
        sx={{ 
        py: 1.5, 
        borderRadius: 0, 
        background: "linear-gradient(135deg, #75be81ff, #3a810bae)", 
        boxShadow: "none", // remove default MUI shadow
        "&:hover": {
        background: "linear-gradient(135deg, #3a810bae, #75be81ff)", // reverse on hover
        }
        }}
      >
        Upload Resume (PDF)
      <input
      type="file"
      hidden
      name="resume"
      accept="application/pdf"
      onChange={handleFileChange}
      />
      </Button>

          {resumeFile && (
          <Typography variant="body2" sx={{ mt: 1 }}>
          {resumeFile.name}
          </Typography>
          )}
      </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #75be81, #3a810b, #75be81, #3a810b)",
                    backgroundSize: "400% 400%",
                    animation: "gradientFlow 15s ease infinite",
                    "@keyframes gradientFlow": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
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
