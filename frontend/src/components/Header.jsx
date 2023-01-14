import React from "react";
import { Typography, AppBar, Button } from "@mui/material";

export default function Header() {
  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <AppBar
      id="home"
      position="absolute"
      sx={{
        marginBottom: "2rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant="h1"
        sx={{ paddingBottom: "0.3rem", borderBottom: "2px solid #504538" }}
      >
        Welcome to my labs !
      </Typography>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("about-me")}
      >
        <Typography variant="h6">About me</Typography>
      </Button>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("my-work")}
      >
        <Typography variant="h6">My works</Typography>
      </Button>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("contact")}
      >
        <Typography variant="h6">Contact me</Typography>
      </Button>
    </AppBar>
  );
}
