import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
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
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Inicio' />
        </ListItem>
      </Link>
      <Link href={"/sobrenosotros"}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Nosotros' />
        </ListItem>
      </Link>
      <Link href={"/servicios"}>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Servicios' />
        </ListItem>
      </Link>
      <ListItemButton onClick={() => setOpenalumni(!openalumni)}>
        <ListItemIcon>
          <InboxIcon />
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
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Matriculas' />
        </ListItem>
      </Link>
      <Link href={"/admisiones"}>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Admisiones' />
        </ListItem>
      </Link>
      <Link href={"/portales"}>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Portales' />
        </ListItem>
      </Link>
      <Link href={"/noticias"}>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Noticias' />
        </ListItem>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
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

        <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
