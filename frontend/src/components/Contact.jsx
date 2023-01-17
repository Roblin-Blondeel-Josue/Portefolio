import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import parchemin from "../../assets/message.png";

export default function Contact() {
  return (
    <Card sx={{ height: "90vh", boxShadow: 3, m: "5vh 25vw", width: "50vw" }}>
      <CardHeader
        id="contact"
        title={
          <Typography
            sx={{ borderBottom: "2px solid #504538", width: "13ch" }}
            variant="h3"
          >
            How Find Me
          </Typography>
        }
      />
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={parchemin}
          alt="Scroll Picture"
          sx={{ marginBottom: "1rem", width: "25vw" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">This are all my contacts :</Typography>
          <Button
            sx={{ m: ".75rem" }}
            onClick={() =>
              window.open(
                "https://github.com/Roblin-Blondeel-Josue",
                "_blank",
                "noreferrer"
              )
            }
          >
            <GitHubIcon sx={{ marginRight: ".5rem" }} /> My GitHub
          </Button>
          <Button
            sx={{ m: ".75rem" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/josueroblinblondeel/",
                "_blank",
                "noreferrer"
              )
            }
          >
            <LinkedInIcon sx={{ marginRight: ".5rem" }} /> My LinkedIn
          </Button>
          <Typography sx={{ m: ".75rem", display: "flex" }}>
            <EmailIcon sx={{ marginRight: ".5rem" }} /> rblondeeljosue@gmail.com
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
