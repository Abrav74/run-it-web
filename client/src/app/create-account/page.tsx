"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";

export default function CreateAccount() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", pt: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom color="primary">
            Create Account
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Sign up to join RunIt and connect with other athletes!
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField fullWidth label="Name" margin="normal" required />
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
              Create Account
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
