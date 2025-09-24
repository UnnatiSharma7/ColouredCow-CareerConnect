import React, { useMemo } from "react";
import { useApplicationContext } from "../context/ApplicationContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  LinearProgress,
} from "@mui/material";

const jobPostings = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "UI/UX Designer",
  "HR Associate"
];

const HrReports = () => {
  const { applications } = useApplicationContext();

  // 1. Average time taken for action (approval/rejection)
  const avgTime = useMemo(() => {
    const completedApps = applications.filter(
      (app) => app.status === "approved" || app.status === "rejected"
    );

    if (completedApps.length === 0) return 0;

    const totalTime = completedApps.reduce((sum, app) => {
      const created = new Date(app.createdAt);
      const updated = new Date(app.updatedAt);
      return sum + (updated - created);
    }, 0);

    return Math.round(totalTime / completedApps.length / (1000 * 60 * 60 * 24)); // in days
  }, [applications]);

  // 2. Job designation trend in last 30 days
  const jobData = useMemo(() => {
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    return jobPostings.map((role) => {
      const count = applications.filter(
        (app) =>
          app.jobRole === role &&
          new Date(app.createdAt) >= last30Days
      ).length;

      return { jobRole: role, applications: count };
    });
  }, [applications]);

  return (
  <Container maxWidth="80%" sx={{ py: 4 }}>
  <Typography
    variant="h4"
    sx={{ mb: 3, fontWeight: "bold", color: "#544f4fff" }}
  >
    Reports
  </Typography>

  <Paper
    elevation={0} // no shadow
    sx={{
      p: 3,
      mb: 4,
      bgcolor: "rgba(243, 249, 244, 0.61)",
      borderRadius: 2,
      border: "1px solid rgba(80, 126, 58, 0.3)", // thin border line
    }}
  >
    <Typography
      variant="h6"
      sx={{
        mb: 1,
        fontWeight: "normal",
        fontSize: "1.125rem",
        color: "#555",
      }}
    >
      Average Time to Process the Applications: {avgTime}
    </Typography>
  </Paper>

  <Paper
    elevation={0} // no shadow
    sx={{
      p: 3,
      bgcolor: "rgba(243, 249, 244, 0.61)",
      borderRadius: 3,
      minHeight: 400,
      border: "1px solid rgba(80, 126, 58, 0.3)", // thin border line
    }}
  >
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={jobData}
        margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="jobRole"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={70}
          tick={{ fontSize: 12, fill: "#4b5563" }}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 12, fill: "#4b5563" }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#f9fafb", borderRadius: 8 }}
          cursor={{ fill: "rgba(130, 203, 159, 0.2)" }}
        />
        <Bar
          dataKey="applications"
          fill="#82cb9f"
          radius={[6, 6, 0, 0]}
          barSize={32}
        />
      </BarChart>
    </ResponsiveContainer>
  </Paper>
     </Container>

  );
};

export default HrReports;
