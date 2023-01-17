import React from "react";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import partyplace from "../../assets/partyplace.png";

export default function PartyPlace() {
  return (
    <Card
      elevation={4}
      sx={{
        height: "70vh",
        width: "60vw",
        borderRadius: "5px",
        boxShadow: 3,
        marginTop: "2rem",
        bgcolor: "primary.main",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          p: ".5rem 2rem",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            padding: "0 1rem",
            height: "65vh",
            width: "35vw",
            bgcolor: "#FFF5FF",
            borderTop: "1px solid #292724",
            borderBottom: "1px solid #292724",
            borderLeft: "1px solid #292724",
            borderRight: "2px solid #ccc2b5",
            display: "flex",
            justifyContent: "center",
            boxShadow: "-8px 4px 9px 5px rgba(0,0,0,0.4)",
          }}
        >
          <img src={partyplace} alt="Party Place Welcome page" />
        </Box>

        <Box
          sx={{
            padding: "2rem",
            height: "65vh",
            width: "35vw",
            bgcolor: "#FFF5FF",
            borderTop: "1px solid #292724",
            borderBottom: "1px solid #292724",
            borderRight: "1px solid #292724",
            borderLeft: "2px solid #ccc2b5",
            boxShadow: "8px 4px 9px 5px rgba(0,0,0,0.4)",
          }}
        >
          <Typography
            sx={{
              borderBottom: "2px solid #504538",
              width: "10ch",
              marginBottom: "1rem",
            }}
            variant="h4"
          >
            Party Place
          </Typography>
          <Typography variant="body2">
            Party place is a website that we created during one month with my
            classcowork. The path choses by the Professor was : "Create a React
            Website who make API call. You're free for the method". My group and
            me chose the themating of Party and Journey. Found your themating
            party in fews clicks.
            <br />
            <br />
            Party Place was a react app, with Material UI as framework for
            compenents. For the API, we choose MealDb, CocktailDB and Spotify
            API
          </Typography>
          <Button
            onClick={() =>
              window.open(
                "https://sxb-2022-party-place.vercel.app/",
                "_blank",
                "noreferrer"
              )
            }
            sx={{ textDecoration: "none", m: "2rem 0", color: "primary.main" }}
          >
            Try it there
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
