import React from "react";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import underconstruction from "../../assets/underconstruction.png";

export default function KlassBox() {
  return (
    <Card
      elevation={4}
      sx={{
        height: "70vh",
        width: "60vw",
        borderRadius: "5px",
        boxShadow: 3,
        marginTop: "2rem",
        bgcolor: "#91091E",
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
          <img src={underconstruction} alt="Klassbox Welcome page" />
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
            KlassBox in my first fullstack website. The client was a caterer who
            prepared meals for company. Before the website, he used to take his
            orders with whatsapp and received moneys in cash. Now, he has a
            database of his client, historics orders and online payement.
            <br />
            <br />
            Party Place was a Next app, with Material UI as framework for
            compenents. For the API, we create an API rest with NodeJs and
            Sequelize.
            <br />
            <br />
            Klassbox was under construction. Visit the GitHub
          </Typography>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/WildCodeSchool/092022-project3-box-front",
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
                "https://github.com/WildCodeSchool/092022-project3-box-api",
                "_blank",
                "noreferrer"
              )
            }
          >
            Back there
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
