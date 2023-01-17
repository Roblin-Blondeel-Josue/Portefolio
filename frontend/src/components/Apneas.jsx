import React from "react";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import apnea from "../../assets/apnea.png";

export default function Apnea() {
  return (
    <Card
      elevation={4}
      sx={{
        height: "70vh",
        width: "60vw",
        borderRadius: "5px",
        boxShadow: 3,
        marginTop: "2rem",
        bgcolor: "#7ACCBF",
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
          <img src={apnea} alt="Apnea Welcome page" />
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
            Apnea is a website that we created during an one day hackathon on
            Wild Code School. The rule of this hackathon was "Think a new way
            for journey". We choose to create a website that give you pollution
            of an city (between the most polluted city arround the world) and
            the impact of your flight for going in this place
            <br />
            <br />
            Apnea was a react app, with Material UI as framework for compenents.
            For the API, we choose some API for find the air informations,
            picture, wiki description and the distance between your position and
            the destination
          </Typography>
          <Button
            onClick={() =>
              window.open("https://apnea.vercel.app/", "_blank", "noreferrer")
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
