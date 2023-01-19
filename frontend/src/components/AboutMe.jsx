import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from "@mui/material";
import picture1 from "../../assets/picture1.png";

export default function AboutMe() {
  return (
    <Card
      sx={{ height: "90vh", boxShadow: 3, marginTop: "2rem", width: "75vw" }}
    >
      <CardHeader
        id="about-me"
        title={
          <Typography sx={{ width: "10ch" }} variant="h3">
            Who I Am
          </Typography>
        }
      />
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={picture1}
          alt="Labs"
          sx={{ marginBottom: "1rem", height: "70vh" }}
        />
        <Typography variant="body1" sx={{ margin: "1rem 2rem" }}>
          Hello, my name is Josué, from Strasbourg. I'm a young develeppor web.
          I began to learn web developping starting on September 2022. I love to
          work with ReactJs and NodeJs to create new websites. Recently, I began
          the study of FramerMotion library to create little animation for my
          website.
          <br />
          <br />
          Self-taught, I learned a bit of Computer Aided Design for 3D printing,
          as well as what concerns the Arduino. I got a big interest for the
          domotic and IoT. I'm starting to study and try to work on a magic
          mirror with RaspBerry.
          <br />
          <br />
          Outside of work, I'm a SF/Fantasy lover. I have plenty of hobbies
          which includes doing a role-play game, read novels or books and
          sometime try to write some stories. In other case, I'm LARP entousiasm
          and as a player, I like to create and play a character. And as a game
          master, I write stories and leave my players to do all sort of stuff.
          All emotions that they feel, is one of my pleasure.
        </Typography>
      </CardContent>
    </Card>
  );
}
