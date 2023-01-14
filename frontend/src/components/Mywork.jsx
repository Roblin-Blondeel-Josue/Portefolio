import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Box,
  Button,
  Modal,
} from "@mui/material";
import animation1 from "../assets/animation1.gif";
import iconbook1 from "../assets/iconbook1.png";
import iconbook2 from "../assets/iconbook2.png";
import skull from "../assets/skull.svg";
import PartyPlace from "./PartyPlace";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
};
export default function Mywork() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  return (
    <Card sx={{ height: "90vh", boxShadow: 3 }}>
      <CardHeader
        id="my-work"
        title={
          <Typography
            variant="h3"
            sx={{ borderBottom: "2px solid #504538", width: "12ch" }}
          >
            What I Did
          </Typography>
        }
      />
      <CardContent
        style={{
          display: "flex",
          p: 0,
          m: 0,
          marginRight: "1rem",
        }}
      >
        <div>
          <Typography variant="h6">
            This is my projects library. Anytime I create a new projet, I will
            put it on the shelf.
            <br />
            <br /> Choose a book to read it.
          </Typography>
          <img
            src={animation1}
            alt="Labs tool animation"
            style={{ height: "40vh", marginLeft: "2rem" }}
          />
        </div>
        <Box
          sx={{
            m: "0 1rem",
            height: "65vh",
            width: "70vw",
            border: "1rem ridge rgba(82, 59, 39, .6)",
          }}
        >
          <div
            className="etagere1"
            style={{ borderBottom: "5px solid #523b27", display: "flex" }}
          >
            <Button sx={{ p: 0 }} onClick={() => handleOpen()}>
              <img
                style={{
                  marginLeft: "1rem",
                  padding: 0,
                  height: "4rem",
                }}
                alt="Book icon"
                src={iconbook1}
              />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <PartyPlace />
              </Box>
            </Modal>
            <img
              style={{
                marginLeft: "5rem",
                padding: 0,
                height: "4rem",
                transform: "rotate(10deg)",
              }}
              alt="Skull icon"
              src={skull}
            />
          </div>
          <div
            className="etagere2"
            style={{
              marginTop: "1rem",
              borderBottom: "5px solid #523b27",
              display: "flex",
            }}
          >
            <Button sx={{ p: 0 }} onClick={() => handleOpenModal2()}>
              <img
                style={{
                  marginLeft: "1rem",
                  padding: 0,
                  height: "4rem",
                }}
                alt="Book icon"
                src={iconbook2}
              />
            </Button>
            <Modal
              open={openModal2}
              onClose={handleCloseModal2}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>bob</Box>
            </Modal>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
