"use client";
import { Box, Container, Typography, Paper, TextField, Button } from "@mui/material";

export default function EditAccount() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", pt: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom color="primary">
            Edit Account Details
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Update your information below and save changes.
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField fullWidth label="Name" margin="normal" defaultValue="John Doe" required />
            <TextField fullWidth label="Email" type="email" margin="normal" defaultValue="john@example.com" required />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
