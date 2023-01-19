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
        bgcolor: "primary.darker",
        color: "primary.lighter",
        marginBottom: "2rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h2" sx={{ paddingBottom: "0.3rem" }}>
        WELCOME TO MY LABS
      </Typography>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("about-me")}
      >
        <Typography variant="h6">ABOUT ME</Typography>
      </Button>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("my-work")}
      >
        <Typography variant="h6">MY WORKS</Typography>
      </Button>
      <Button
        variant="text"
        sx={{ p: 0, m: 0, color: "inherit" }}
        onClick={() => handleClickScroll("contact")}
      >
        <Typography variant="h6">CONTACT ME</Typography>
      </Button>
    </AppBar>
  );
}
