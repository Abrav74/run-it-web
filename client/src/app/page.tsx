"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Paper,
  Stack,
} from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SportMeetup
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Welcome to SportMeetup!
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Find and join local sports meetups, connect with players, and stay
            active.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button variant="contained" color="primary" size="large">
              Find Meetups
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Create Meetup
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
