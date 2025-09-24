import React, { useState, useMemo, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useApplicationContext } from "../context/ApplicationContext"  
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Typography,
  TextField
} from "@mui/material";
import { CheckCircle, AccessTime, Cancel } from "@mui/icons-material";


const statusIcons = {
  approved: <CheckCircle sx={{ color: "#6cc070" }} />,
  pending: <AccessTime sx={{ color: "#e9b949" }} />,
  rejected: <Cancel sx={{ color: "#f27777" }} />,
};

const cardStyle = {
  bgcolor: "rgba(243, 249, 244, 0.61)", // soft green-ish bg
  border: "1px solid rgba(80, 126, 58, 0.3)", // green border
  borderRadius: 3, // consistent rounded corners
  boxShadow: "none", // optional: removes Paper’s shadow
};


export default function ApplicationTracking() {
  const {applications, setApplications} = useApplicationContext();
  const [selectedAppId, setSelectedAppId] = useState(null);
  // const [resumeDialogOpen, setResumeDialogOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  // Now applications is always an array
  console.log("Applications from context: ", applications);

    useEffect(() => {
  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token"); // get token from localStorage
      if(token)console.log("token stored in the local storage is: ",token);
      else console.log("No token is there in the local storage");
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/applications`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // attach token here
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await res.json();
      console.log(data);
      setApplications(data); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchApplications();
}, []);


  const [filters, setFilters] = useState({
    jobRole: "",
    city: "",
    college: "",
    graduationYear: "",
  });

  const handleFilterChange = (field) => (event) => {
    setFilters((prev) => ({ ...prev, [field]: event.target.value }));
    setSelectedAppId(null);
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      if (
        (filters.jobRole && app.jobRole !== filters.jobRole) ||
        (filters.city && app.city !== filters.city) ||
        (filters.college && app.college !== filters.college) ||
        (filters.graduationYear && app.graduationYear !== filters.graduationYear)
      ) {
        return false;
      }
      return true;
    });
  }, [applications, filters]);

  console.log("filtered applications: ",filteredApplications);

// new updated status function
const updateStatus = async (newStatus) => {
  if (selectedAppId === null) return;

  try {
    // call backend API
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/application/${selectedAppId}/status`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      }
    );

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Failed to update status");
    }

    // ✅ show toast
    toast.success(data.message, {
      position: "top-right",
      autoClose: 3000,
    });

    // ✅ update state with the actual updated object
    setApplications((prev) =>
      prev.map((app) => (app._id === selectedAppId ? data.updated : app))
    );
  } catch (err) {
    console.error(err);
    toast.error("Error updating status in database");
  }
};


const selectedApp = applications.find((app) => app._id === selectedAppId);

  // Unique Job Roles
const uniqueJobRoles = [
  ...new Set(
    applications
      .map((a) => {
        if (a?.jobRole) return a.jobRole;
        if (a?.jobRole) return a.jobRole; 
        return null;
      })
      .filter(Boolean)
  ),
];

// Unique Cities
const uniqueCities = [
  ...new Set(
    applications
      .map((a) => {
        if (a?.city) return a.city;
        if (a?.city) return a.city; // fallback
        return null;
      })
      .filter(Boolean)
  ),
];

// Unique Colleges
const uniqueColleges = [
  ...new Set(
    applications
      .map((a) => {
        if (a?.college) return a.college;
        if (a?.college) return a.college; // fallback
        return null;
      })
      .filter(Boolean)
  ),
];

// Unique Graduation Years
const uniqueGradYears = [
  ...new Set(
    applications
      .map((a) => {
        if (a?.graduationYear) return a.graduationYear;
        if (a?.graduationYear) return a.graduationYear; // fallback
        return null;
      })
      .filter(Boolean)
  ),
];


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        <FormControl size="small" sx={{ ...cardStyle,minWidth: 150 }}>
          <InputLabel>Filter by Job</InputLabel>
          <Select
            value={filters.jobRole}
            label="Filter by Job"
            onChange={handleFilterChange("jobRole")}
          >
            <MenuItem value="">All Jobs</MenuItem>
            {uniqueJobRoles.map((job) => (
              <MenuItem key={job} value={job}>
                {job}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ ...cardStyle,minWidth: 150 }}>
          <InputLabel>Filter by City</InputLabel>
          <Select
            value={filters.city}
            label="Filter by City"
            onChange={handleFilterChange("city")}
          >
            <MenuItem value="">All Cities</MenuItem>
            {uniqueCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ ...cardStyle,minWidth: 200 }}>
          <InputLabel>Filter by College</InputLabel>
          <Select
            value={filters.college}
            label="Filter by College"
            onChange={handleFilterChange("college")}
          >
            <MenuItem value="">All Colleges</MenuItem>
            {uniqueColleges.map((college) => (
              <MenuItem key={college} value={college}>
                {college}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ ...cardStyle,minWidth: 150 }}>
          <InputLabel>Filter by Grad Year</InputLabel>
          <Select
            value={filters.graduationYear}
            label="Filter by Grad Year"
            onChange={handleFilterChange("graduationYear")}
          >
            <MenuItem value="">All Years</MenuItem>
            {uniqueGradYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", height: "calc(100vh - 100px)" }}>
  {/* Application List */}
  <Paper 
    sx={{
      flex: 1,
      p: 2,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    <Typography variant="h6" sx={{ mb: 1 }}>Recent Applications</Typography>
    <List
      sx={{
        flex: 1,
        overflowY: "auto",
        scrollbarWidth: "none", 
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {filteredApplications.map((app) => (
        <ListItem
          key={app._id}
          button
          selected={selectedAppId === app._id}
          onClick={() => setSelectedAppId(app._id)}
        >
          <ListItemText primary={`Application ID: ${app._id ? app._id.slice(-4) : "N/A"}`} />
          {statusIcons[app.status?.toLowerCase()]}
        </ListItem>
      ))}
    </List>
  </Paper>

  {/* Application Overview */}
  <Paper 
    sx={{
      flex: 2,
      p: 2,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Typography variant="h6">Application Overview</Typography>
    {selectedApp ? (
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Full Name" value={selectedApp.name} inputProps={{ readOnly: true }} />
        <TextField label="Email" value={selectedApp.email} inputProps={{ readOnly: true }} />
        <TextField label="City" value={selectedApp.city} inputProps={{ readOnly: true }} />
        <TextField label="College" value={selectedApp.college} inputProps={{ readOnly: true }} />
        <TextField label="Grad Year" value={selectedApp.graduationYear} inputProps={{ readOnly: true }} />
        <TextField label="Job Role" value={selectedApp.jobRole} inputProps={{ readOnly: true }} />

        <Box sx={{ display: "flex", gap: 2, opacity: 0.8, mt: "auto" }}>
          <Button variant="contained" color="success" onClick={() => updateStatus("approved")} sx={{ flex: 1 }}>
            Approve
          </Button>
          <Button variant="contained" color="error" onClick={() => updateStatus("rejected")} sx={{ flex: 1 }}>
            Reject
          </Button>
          <Button 
            variant="outlined" 
            sx={{ flex: 1 }}
            onClick={() => {
              if (selectedApp?.resume) {
                window.open(selectedApp.resume, "_blank", "noopener,noreferrer");
              } else {
                alert("No resume uploaded");
              }
            }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
    ) : (
      <Typography sx={{ mt: 2, fontStyle: "italic" }}>
        Select an application to view details
      </Typography>
    )}
  </Paper>
</Box>


    </Box>
    <ToastContainer /> 
    </>
  );
}
