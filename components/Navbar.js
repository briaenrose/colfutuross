/* import React, { useState } from "react";
import Link from "next/link";
import style from "./style/navbar.module.css";
import Image from "next/image";
import Logo from "../public/Images/Logo.png";
import { makeStyles } from "@mui/material/core/styles";

const useStyles = makeStyles((them) => ({
  nav: {
    background: "linear-gradient(315deg, #B1BFD8 0%, #667eaa 74%)",
    padding: "20px 40px",
  },

  hamburger: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "(0 2px 5px rgb(255, 101, 47, .2)",
    transition: "all 0.5s ease-in-out",
  },
}));

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link href="/">
            <a>
              <Image className={style.imageLogo} src={Logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div>
          <div>
            <div className={classes.hamburger}></div>
          </div>

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

              <div className={style.dropdownMenuContent}>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
*/
