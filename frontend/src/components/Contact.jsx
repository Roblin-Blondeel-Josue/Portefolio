import React from "react";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";

export default function Contact() {
  return (
    <Card sx={{ height: "90vh", boxShadow: 3, marginTop: "2rem" }}>
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
        <Typography variant="body1" sx={{ marginLeft: "1rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere
          assumenda delectus error officiis corporis nostrum iste
          exercitationem. Harum excepturi ab magnam rerum consequuntur
          voluptatum eveniet animi libero asperiores ipsum!
        </Typography>
      </CardContent>
    </Card>
  );
}
