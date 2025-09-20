import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Overview from "../components/Overview";
import HrReports from "../components/HrReports";
import ApplicationTracking from "../components/ApplicationTracking";

export default function HRMetricsDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "applications":
        return <ApplicationTracking />;
      case "reports":
        return <HrReports />;
      default:
        return <Overview />;
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 280,
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "sticky",
          top: 20,
          height: "calc(100vh - 40px)"
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#555",
            mb: 3,
            textTransform: "uppercase",
            backgroundColor: "#dbe9dc",
            borderRadius: 4,
            py: 1,
          }}
        >
          HR Dashboard
        </Typography>

        <Button
        variant={activeSection === "overview" ? "contained" : "outlined"}
        onClick={() => setActiveSection("overview")}
        sx={{
        bgcolor: activeSection === "overview" ? "#a8d5ba" : "transparent", // light green active
        color: activeSection === "overview" ? "#fff" : "#555",
        borderColor: "#a8d5ba",
        "&:hover": {
        bgcolor: "#90c9a7", // darker green on hover
        borderColor: "#90c9a7",
        },
      }}
      >
      Overview
    </Button>

    <Button
    variant={activeSection === "applications" ? "contained" : "outlined"}
    onClick={() => setActiveSection("applications")}
    sx={{
    bgcolor: activeSection === "applications" ? "#a8d5ba" : "transparent",
    color: activeSection === "applications" ? "#fff" : "#555",
    borderColor: "#a8d5ba",
    "&:hover": {
      bgcolor: "#90c9a7",
      borderColor: "#90c9a7",
    },
      }}
    >
    Application Tracking
    </Button>

    <Button
  variant={activeSection === "reports" ? "contained" : "outlined"}
  onClick={() => setActiveSection("reports")}
  sx={{
    bgcolor: activeSection === "reports" ? "#a8d5ba" : "transparent",
    color: activeSection === "reports" ? "#fff" : "#555",
    borderColor: "#a8d5ba",
    "&:hover": {
      bgcolor: "#90c9a7",
      borderColor: "#90c9a7",
    },
  }}
    >
     HR Reports
    </Button>

      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>{renderContent()}</Box>
    </Box>
  );
}
