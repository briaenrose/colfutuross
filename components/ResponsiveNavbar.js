import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DirectionsBoatFilledRoundedIcon from "@mui/icons-material/DirectionsBoatFilledRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import Image from "next/image";
import { flexbox } from "@mui/system";

export default function Navbar() {
  const [openalumni, setOpenalumni] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };

  const MyImage = (props) => {
    return (
      <Image
        loader={myLoader}
        src='me.png'
        alt='Picture of the author'
        width={500}
        height={500}
      />
    );
  };
  // Items de navigacion
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link href={"/"}>
        <ListItem button>
          <ListItemIcon>
            <DirectionsBoatFilledRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Inicio' />
        </ListItem>
      </Link>
      <Link href={"/sobrenosotros"}>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Nosotros' />
        </ListItem>
      </Link>
      <Link href={"/servicios"}>
        <ListItem button>
          <ListItemIcon>
            <DesignServicesRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Servicios' />
        </ListItem>
      </Link>
      <ListItemButton onClick={() => setOpenalumni(!openalumni)}>
        <ListItemIcon>
          <AccessibilityNewRoundedIcon />
        </ListItemIcon>
        <ListItemText primary='Alumni' />
        {openalumni ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openalumni} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link href={"/propuestabasicaprimaria"}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Propuesta Básica Primaria' />
            </ListItemButton>
          </Link>
          <Link href={"/graduandos"}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Graduandos' />
            </ListItemButton>
          </Link>
          <Link href={"/convenios"}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Convenios' />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <Link href={"/matriculas"}>
        <ListItem button>
          <ListItemIcon>
            <LibraryAddCheckRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Matriculas' />
        </ListItem>
      </Link>
      <Link href={"/admisiones"}>
        <ListItem button>
          <ListItemIcon>
            <MoodRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Admisiones' />
        </ListItem>
      </Link>
      <Link href={"/portales"}>
        <ListItem button>
          <ListItemIcon>
            <ImportContactsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Portales' />
        </ListItem>
      </Link>
      <Link href={"/noticias"}>
        <ListItem button>
          <ListItemIcon>
            <FiberNewRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Noticias' />
        </ListItem>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ConnectWithoutContactRoundedIcon />
        </ListItemIcon>
        <ListItemText primary='Contáctanos' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link href={"/trabajaconnosotros"}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Trabaja con Nosotros' />
            </ListItemButton>
          </Link>
          <Link href={"/pqr"}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='PQR' />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </Box>
  );

  // Button
  return (
    <div>
      <React.Fragment>
        <Box sx={{ mr: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={toggleDrawer(true)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
