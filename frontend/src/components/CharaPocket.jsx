import React from "react";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import picture from "../../assets/characterPocket.png";

export default function CharacPocket() {
  return (
    <Card
      elevation={4}
      sx={{
        height: "80vh",
        width: "60vw",
        borderRadius: "5px",
        boxShadow: 3,
        marginTop: "2rem",
        bgcolor: "#181D31",
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
            height: "75vh",
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
          <img src={picture} alt="Chara'Pocket Welcome page" />
        </Box>

        <Box
          sx={{
            padding: "1rem",
            height: "75vh",
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
              marginBottom: ".5rem",
            }}
            variant="h4"
          >
            Chara'Pocket
          </Typography>
          <Typography variant="body2" sx={{ fontSize: ".8rem" }}>
            Chara'Pocket is a fullstack website. This app was build for helping
            LARP organisator to manage their players and help player to manage
            the character sheet. This is my first solo side-projet.
            <br />
            <br />
            Chara'Pocket was a Next app, with Material UI as framework for
            compenents. For the API, we create an API rest with NodeJs and
            MangoDB.
            <br />
            <br />
            Chara'Pocket was under construction
          </Typography>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/Roblin-Blondeel-Josue/character-in-pocket",
                "_blank",
                "noreferrer"
              )
            }
            sx={{
              textDecoration: "none",
              m: "2rem .5rem",
              color: "primary.main",
            }}
            href=""
          >
            Front there
          </Button>
          <Button
            sx={{
              textDecoration: "none",
              m: "2rem .5rem",
              color: "primary.main",
            }}
            onClick={() =>
              window.open(
                "https://github.com/Roblin-Blondeel-Josue/garou-api",
                "_blank",
                "noreferrer"
              )
            }
          >
            Back there
          </Button>
          <Button
            sx={{
              textDecoration: "none",
              m: "2rem .5rem",
              color: "primary.main",
            }}
            onClick={() =>
              window.open(
                "https://character-in-pocket.vercel.app/",
                "_blank",
                "noreferrer"
              )
            }
          >
            Website
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
