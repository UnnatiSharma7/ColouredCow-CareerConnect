import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fa",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          textAlign: "center",
          p: 4,
          borderRadius: 3,
          boxShadow: 6,
        }}
      >
        <CardContent>
          <CheckCircleOutlineIcon
            sx={{ fontSize: 80, color: "success.main", mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Your application has been submitted successfully.  
            We’ll get back to you via email soon. 🚀
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/")}
            sx={{ borderRadius: 2, px: 4 }}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ThankYouPage;
