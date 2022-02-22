import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import Menudesplegable from "../components/Menudesplegable";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const alumni = Boolean(anchorEl);
  const handleAlumniClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAlumniClose = () => {
    setAnchorEl(null);
  };

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

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Colegio Infantil Futuros Sabios
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Navbar />
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Colegio Infantil Futuros Sabios
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href={"/"}>
              <ListItem button>
                <ListItemText primary='Inicio' />
              </ListItem>
            </Link>
            <Link href={"/sobrenosotros"}>
              <ListItem button>
                <ListItemText primary='Nosotros' />
              </ListItem>
            </Link>
            <Link href={"/servicios"}>
              <ListItem button>
                <ListItemText primary='Servicios' />
              </ListItem>
            </Link>

            <Menudesplegable title='Alumni'>
              <List component='div' disablePadding>
                <Link href={"/propuestabasicaprimaria"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary='Propuesta Básica Primaria' />
                  </ListItemButton>
                </Link>
                <Link href={"/graduandos"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary='Graduandos' />
                  </ListItemButton>
                </Link>
                <Link href={"/convenios"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary='Convenios' />
                  </ListItemButton>
                </Link>
              </List>
            </Menudesplegable>

            <Link href={"/matriculas"}>
              <ListItem button>
                <ListItemText primary='Matriculas' />
              </ListItem>
            </Link>
            <Link href={"/admisiones"}>
              <ListItem button>
                <ListItemText primary='Admisiones' />
              </ListItem>
            </Link>
            <Link href={"/portales"}>
              <ListItem button>
                <ListItemText primary='Portales' />
              </ListItem>
            </Link>
            <Link href={"/noticias"}>
              <ListItem button>
                <ListItemText primary='Noticias' />
              </ListItem>
            </Link>
            <Menudesplegable title='Contáctanos'>
              <List component='div' disablePadding>
                <Link href={"/trabajaconnosotros"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary='Trabaja con Nosotros' />
                  </ListItemButton>
                </Link>
                <Link href={"/pqr"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary='PQR' />
                  </ListItemButton>
                </Link>
              </List>
            </Menudesplegable>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
