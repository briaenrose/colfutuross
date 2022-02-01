import React, { useState } from "react";
import Link from "next/link";
//import styles from "./style/navbar.module.css";
import Image from "next/image";
import Logo from "../public/Images/Logo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(315deg, #B1BFD8 0%, #667eaa 74%)",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageLogo: {},

  hamburger: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "(0 2px 5px rgb(255, 101, 47, .2)",
    transition: "all 0.5s ease-in-out",

    "&::before": {
      content: "",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transform: "translateX (10px)",
    },

    "&::after": {
      content: "'after'",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {},
  },

  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },

  activateSidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
  },

  ul: {
    listStyleType: "none",
    "& li": {
      padding: "20px 0",
    },
  },

  a: {
    margin: "20px 0",
    color: "white",
  },
}));

export default function Inicio() {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link href='/'>
            <a>
              <Image className={classes.imageLogo} src={Logo} alt='Logo' />
            </a>
          </Link>
        </div>

        <div onClick={() => setActive(!active)}>
          <div
            className={active ? classes.activeHamburger : classes.hamburger}
          ></div>
        </div>
      </div>
      <div className={classes.sidenav}>
        <ul className={classes.ul}>
          <li>
            <Link href='/'>
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href='/sobrenosotros'>
              <a>Sobre Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href=''>
              <a className='dropdownMenu'>Alumni</a>
            </Link>

            <div className={classes.dropdownMenuContent}>
              <Link href='/convenios'>
                <a>Convenios</a>
              </Link>

              <Link href='/propuestabasicaprimaria'>
                <a>Propuesta Básica Primaria</a>
              </Link>

              <Link href='/graduandos'>
                <a>Graduandos</a>
              </Link>
            </div>
          </li>
          <li>
            <Link href='/servicios'>
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href='/matriculas'>
              <a>Matrículas</a>
            </Link>
          </li>
          <li>
            <Link href='/admisiones'>
              <a>Admisiones</a>
            </Link>
          </li>
          <li>
            <Link href='/portales'>
              <a>Portales</a>
            </Link>
          </li>
          <li>
            <Link href='/noticias'>
              <a>Noticias</a>
            </Link>
          </li>
          <li>
            <a href='' className='dropdownMenu'>
              Contáctanos
            </a>

            <div className='dropdownMenu-content'>
              <Link href='/trabajaconnosotros'>
                <a>Trabaja con nosotros</a>
              </Link>

              <Link href='/pqr'>
                <a>PQR</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <div className="hola">
        <h1>Index</h1>
      </div>
    </>
  );
}

 <ul>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/sobrenosotros">
                <a>Sobre Nosotros</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="dropdownMenu">Alumni</a>
              </Link>

              <div className={classes.dropdownMenuContent}>
                <Link href="/convenios">
                  <a>Convenios</a>
                </Link>

                <Link href="/propuestabasicaprimaria">
                  <a>Propuesta Básica Primaria</a>
                </Link>

                <Link href="/graduandos">
                  <a>Graduandos</a>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/servicios">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/matriculas">
                <a>Matrículas</a>
              </Link>
            </li>
            <li>
              <Link href="/admisiones">
                <a>Admisiones</a>
              </Link>
            </li>
            <li>
              <Link href="/portales">
                <a>Portales</a>
              </Link>
            </li>
            <li>
              <Link href="/noticias">
                <a>Noticias</a>
              </Link>
            </li>
            <li>
              <a href="" className="dropdownMenu">
                Contáctanos
              </a>

              <div className="dropdownMenu-content">
                <Link href="/trabajaconnosotros">
                  <a>Trabaja con nosotros</a>
                </Link>

                <Link href="/pqr">
                  <a>PQR</a>
                </Link>
              </div>
            </li>
          </ul>
          */
