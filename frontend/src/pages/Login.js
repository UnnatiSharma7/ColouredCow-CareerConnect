import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
  Stack,
} from "@mui/material";


const cardStyle = {
  width: "100%",
  maxWidth: 400,
  height: 340,
  perspective: 1000,
  margin: "auto",
};

const outerContainerStyle = {
  display: "flex",
  // justifyContent: "center", // horizontal center
  // alignItems: "center",     // vertical center
  height: "100vh",          // full viewport height
  backgroundColor: "#d2edd4b3", // optional background
};

const cardInnerStyle = (flipped) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: 12,
  boxShadow: "0 0 10px  rgba(0,0,0,0.2)",
  textAlign: "center",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "none",
});

const cardFaceStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: 12,
  padding: 24,
  boxSizing: "border-box",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const cardBackStyle = {
  ...cardFaceStyle,
  transform: "rotateY(180deg)",
};

export default function Login({ setAuth }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("token stored in local storage is: ", localStorage.getItem("token"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup ? "/signup" : "/login";
    const body = isSignup ? { name, email, password } : { email, password };

    const res = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // No Authorization header here
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("endpoint is: ",endpoint);

    if (res.ok) {
      localStorage.setItem("token", data.token); // store JWT
      setAuth(true); // update auth state
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <Box sx={outerContainerStyle}>
     <Container sx={cardStyle}>
      <Box sx={cardInnerStyle(isSignup)}>
        {/* Front - Login */}
        <Box component="form" sx={cardFaceStyle} onSubmit={handleSubmit} noValidate>
          <Typography variant="h5" mb={3}>
            Login
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
              bgcolor: "#add7adff",    // background color (e.g., orange)
              color: "#FFFFFF",      // text color (white)
              "&:hover": {
              bgcolor: "#5eaf78ff",  // hover background color (darker orange)
              },
            }}>
              Login
            </Button>
          </Stack>
          <Typography mt={2}>
            Don't have an account?{" "}
            <Link href="#" onClick={() => setIsSignup(true)} underline="hover"
            sx={{color: "#375137ff"}}>
              Sign Up
            </Link>
          </Typography>
        </Box>

        {/* Back - Signup */}
        <Box
          component="form"
          sx={cardBackStyle}
          onSubmit={handleSubmit}
          noValidate
        >
          <Typography variant="h5" mb={3}>
            Sign Up
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              variant="contained"
              type="submit"
              fullWidth
              sx={{
              bgcolor: "#add7adff",    // background color (e.g., orange)
              color: "#FFFFFF",      // text color (white)
              "&:hover": {
              bgcolor: "#5eaf78ff",  // hover background color (darker orange)
              },
            }}
            >
              Sign Up
            </Button>
          </Stack>
          <Typography mt={2}>
            Already have an account?{" "}
            <Link href="#" onClick={() => setIsSignup(false)} underline="hover"
            sx={{color: "#375137ff"}}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
      
    </Container>
    </Box>
  );
}
