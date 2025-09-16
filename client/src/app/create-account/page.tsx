"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "create">("login");

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", pt: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom color="primary">
            {mode === "create" ? "Create Account" : "Login"}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {mode === "create"
              ? "Sign up to join RunIt and connect with other athletes!"
              : "Log in to your RunIt account."}
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            {mode === "create" && (
              <TextField fullWidth label="Name" margin="normal" required />
            )}
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {mode === "create" ? "Create Account" : "Login"}
            </Button>
          </Box>
          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Button
              color="secondary"
              onClick={() => setMode(mode === "login" ? "create" : "login")}
            >
              {mode === "login"
                ? "Don't have an account? Create one"
                : "Already have an account? Login"}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
