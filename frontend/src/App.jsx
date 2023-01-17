import "./App.css";
import {
  Stack,
  Typography,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import ConstructionIcon from "@mui/icons-material/Construction";
import FaceIcon from "@mui/icons-material/Face";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";

const actions = [
  { icon: <AlternateEmailIcon />, name: "Contact", id: "contact" },
  { icon: <ConstructionIcon />, name: "My work", id: "my-work" },
  { icon: <FaceIcon />, name: "About me", id: "about-me" },
  { icon: <CottageIcon />, name: "Home", id: "home" },
];
function handleClickScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function App() {
  return (
    <div className="App">
      <Header />
      <Stack
        sx={{ m: "10vw 5vw", alignItems: "center" }}
        direction="column"
        spacing={5}
      >
        <AboutMe />
        <Mywork />
        <Contact />
      </Stack>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClickScroll(action.id)}
          />
        ))}
      </SpeedDial>
      <Typography
        variant="body2"
        align="right"
        style={{
          margin: "2vh 0",
          bottom: 0,
          left: 0,
          right: 0,
          fontSize: "1rem",
        }}
      >
        Created by Josué BLONDEEL
      </Typography>
    </div>
  );
}

export default App;
