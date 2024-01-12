import React, { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";
import navStyles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const hamburgerStyles = {
  firstSpan: {
    transformOrigin: "left top",
    transform: "rotate(45deg)",
    background: "red"
  },
  midSpan: {
    display: "none"
  },
  lastSpan: {
    transformOrigin: "left bottom",
    background: "red",
    transform: "rotate(-45deg) translate(-.1rem, .1rem)",
  },
}

export const Navbar = () => {
  
  const navigate = useNavigate();
  const { contactRef, scrollToElement, navToggle, isDisplay } = useContext(AppContext);

  return (
    <nav className={navStyles.navbar}>
      <h4>Ningsih</h4>
      <ul className={`${navStyles.navList} ${isDisplay ? navStyles.show : ""}`}>
        <li>
          <HashLink to="/#home" smooth onClick={navToggle}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about" smooth onClick={navToggle}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="/#certificate" smooth onClick={navToggle}>
            Certificate
          </HashLink>
        </li>
        <li>
          <HashLink to="/#testimonials" smooth onClick={navToggle}>
            Testimonials
          </HashLink>
        </li>
        <li>
          <HashLink to="/#gallery" smooth onClick={navToggle}>
            Gallery
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contact" smooth onClick={navToggle}>
            Contact
          </HashLink>
        </li>
      </ul>
      <div className={navStyles["hamburger-menu"]} onClick={navToggle}>
        <span style={isDisplay ? hamburgerStyles.firstSpan : {}}></span>
        <span style={isDisplay ? hamburgerStyles.midSpan : {}}></span>
        <span style={isDisplay ? hamburgerStyles.lastSpan : {}}></span>
      </div>
    </nav>
  );
};
