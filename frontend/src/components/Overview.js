import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useApplicationContext } from "../context/ApplicationContext";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Overview() {
   const { counts } = useApplicationContext();
   const total = counts.approved + counts.rejected + counts.pending;
   console.log("total count is: ",total);
   console.log("pending applications are: ",counts.pending);
   const postings = 0;
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section with Two Top Cards and One Bottom Card */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Total Job Postings */}
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  bgcolor: "#ffffff",
                  borderRadius: 3,
                  p: 3,
                  gap: 3,
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ width: 100, height: 100, flexShrink: 0 }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                    alt="Metrics"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Total Job Postings
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    Current job listings count
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="600" mb={0.5}>
                    {postings} postings active
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Applications this month
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{ minWidth: 80, textAlign: "right" }}
                    >
                     {total} applications
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Applications Card */}
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  bgcolor: "#ffffff",
                  borderRadius: 3,
                  p: 3,
                  gap: 3,
                  position: "relative",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                    alt="Applications"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Applications
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={0.8}>
                    Total pending applications
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Last 30 days summary
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="600" mb={1}>
                    {counts.total}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(counts.pending / total) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: "#f0f0f0",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#ffb74d",
                          },
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ minWidth: 80, textAlign: "right" }}
                    >
                      {counts.pending}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Bottom Row - Application Trends */}
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#ffffff",
                p: 3,
                borderRadius: 3,
                display: "flex",
                gap: 3,
                alignItems: "center",
                border: "1px solid #e0e0e0",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Trends"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Application Trends
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      bgcolor: "#f9fafb",
                      borderRadius: 3,
                      px: 2,
                      py: 1.5,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.01)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon color="success" />
                      <Box>
                        <Typography>Approved</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Last Month
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "#e8f5e9",
                        color: "#2e7d32",
                        borderRadius: "50%",
                        height: 34,
                        width: 34,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {counts.approved}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#f9fafb",
                      borderRadius: 3,
                      px: 2,
                      py: 1.5,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CancelIcon color="error" />
                      <Box>
                        <Typography>Rejected</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Last Month
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "#ffebee",
                        color: "#c62828",
                        borderRadius: "50%",
                        height: 34,
                        width: 34,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {counts.rejected}
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Right Column - KPI Dashboard */}
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4}}>
            <Paper
              elevation={0}
              sx={{
              flex: 1,
              minHeight: 400, // adjust until it visually matches the other column
              p: 3,
              borderRadius: 3,
              bgcolor: "#ffffff",
              border: "1px solid #e0e0e0",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}

            > 
              <Box
                sx={{ width: 120, height: 120, overflow: "hidden", borderRadius: 3 }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                  alt="Help Wanted"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Total Job Postings {total}
                <Typography component="span" color="text.secondary" fontWeight="normal">
                    (Pending Action: {counts.pending})
                </Typography>
              </Typography>
              <Box sx={{ width: "100%", mt: 1, height: 220}}>
                <Typography variant="body2" color="text.secondary">
                  Applications Last 30 Days:
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                  {total}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Approved:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {counts.approved}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rejected:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {counts.rejected}
                </Typography>
              </Box>
             </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
