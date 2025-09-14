"use client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SportMeetup
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit" component={Link} href="/create-account">
          Create Account
        </Button>
      </Toolbar>
    </AppBar>
  );
}
