"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Welcome to RunIt!
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Find and join local sports meetups, create tournaments, and connect
            with other atheletes.
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
        {/* Creative Images Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=400&q=80" // Soccer themed
                  alt="Soccer Meetup"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Soccer Meetup
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join a friendly soccer game in your area. All skill levels
                    welcome!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Basketball: player dunking
                  alt="Basketball Meetup"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Basketball Meetup
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shoot some hoops and meet new friends at a local court.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Running: group of runners
                  alt="Running Meetup"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Running Group
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join a running group for fun, fitness, and motivation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
