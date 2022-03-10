import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Menudesplegable from "./Menudesplegable";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./Logo";
import { ListItem } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
  },
});

const Navbar = () => {
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
          <ThemeProvider theme={theme}>
            {/* <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Colegio Infantil Futuros Sabios
            </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <ResponsiveNavbar />
            </Box>

            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Colegio Infantil Futuros Sabios
            </Typography>

            <Box>
              <Link href={"/"}>
                <ListItemButton>
                  <Logo />
                </ListItemButton>
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link href={"/"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Inicio' />
                </ListItemButton>
              </Link>
              <Link href={"/sobrenosotros"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Nosotros' />
                </ListItemButton>
              </Link>
              <Link href={"/servicios"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText textAlign='flex-start' primary='Servicios' />
                </ListItemButton>
              </Link>

              <Menudesplegable
                sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                title='Alumni'
              >
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
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Matriculas' />
                </ListItemButton>
              </Link>
              <Link href={"/admisiones"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Admisiones' />
                </ListItemButton>
              </Link>
              <Link href={"/portales"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Portales' />
                </ListItemButton>
              </Link>
              <Link href={"/noticias"}>
                <ListItemButton
                  sx={{ mx: "auto", textAlign: "center", borderRadius: 2 }}
                >
                  <ListItemText primary='Noticias' />
                </ListItemButton>
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
          </ThemeProvider>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
