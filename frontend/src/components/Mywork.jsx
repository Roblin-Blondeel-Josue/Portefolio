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
import animation1 from "../../assets/animation1.gif";
import PartyPlace from "./PartyPlace";
import Apnea from "./Apneas";
import KlassBox from "./KlassBox";

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
  const [openModal3, setOpenModal3] = React.useState(false);
  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  return (
    <Card sx={{ height: "90vh", boxShadow: 3 }}>
      <CardHeader
        id="my-work"
        title={
          <Typography variant="h3" sx={{ width: "12ch" }}>
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
        <div style={{ width: "30vw" }}>
          <Typography variant="h6">
            This is my projects library. Anytime I create a website projet, I
            will put it on the shelf. Others littles creations will be place on
            my GitHub
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
            paddingTop: ".5rem",
            m: "0 1rem",
            height: "65vh",
            width: "40vw",
            border: "1rem ridge rgba(82, 59, 39, .6)",
          }}
        >
          <div
            className="etagere1"
            style={{ borderBottom: "5px solid #523b27", display: "flex" }}
          >
            <Button sx={{ p: 0 }} onClick={() => handleOpen()}>
              <Card
                sx={{
                  p: 0,
                  bgcolor: "primary.main",
                  borderRadius: "3px",
                  height: "7rem",
                  width: "2rem",
                  paddingBottom: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    p: 0,
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  P-PLACE
                </Typography>
              </Card>
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
          </div>
          <div
            className="etagere2"
            style={{
              marginTop: "1rem",
              borderBottom: "5px solid #523b27",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{ p: 0 }} onClick={() => handleOpenModal2()}>
              <Card
                sx={{
                  p: 0,
                  bgcolor: "#7ACCBF",
                  borderRadius: "3px",
                  height: "7rem",
                  width: "2rem",
                  paddingBottom: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    p: 0,
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  APNEA
                </Typography>
              </Card>
            </Button>
            <Modal
              open={openModal2}
              onClose={handleCloseModal2}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>
                <Apnea />
              </Box>
            </Modal>
          </div>
          <div
            className="etagere3"
            style={{
              marginTop: "1rem",
              borderBottom: "5px solid #523b27",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button sx={{ p: 0 }} onClick={() => handleOpenModal3()}>
              <Card
                sx={{
                  marginLeft: ".5rem",
                  p: 0,
                  bgcolor: "#91091E",
                  borderRadius: "3px",
                  height: "7rem",
                  width: "2rem",
                  paddingBottom: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    p: 0,
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  KLASSBOX
                </Typography>
              </Card>
            </Button>
            <Modal
              open={openModal3}
              onClose={handleCloseModal3}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>
                <KlassBox />
              </Box>
            </Modal>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
