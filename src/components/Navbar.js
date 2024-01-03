import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import navStyles from "../styles/navbar.module.css"

export const Navbar = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const navToggle = () => {
    setIsDisplay(!isDisplay)
  }

  return (
    <nav className={navStyles.navbar}>
      <h4>Ningsih</h4>
    <ul className={`${navStyles.navList} ${isDisplay ? navStyles.show : ""}`}>
      <li>
        <HashLink to="/#home">Home</HashLink>
      </li>
      <li>
        <HashLink to="/#about">About</HashLink>
      </li>
      <li>
        <HashLink to="/#services">Services</HashLink>
      </li>
      <li>
        <HashLink to="/#testimonials">Testimonials</HashLink>
      </li>
      <li>
        <HashLink to="/#gallery">Gallery</HashLink>
      </li>
      <li>
        <HashLink to="/#contact">Contact</HashLink>
      </li>     
      <button>Call Me Now</button>
    </ul>
      <button>Call Me Now</button>
    <div className={navStyles["hamburger-menu"]} onClick={navToggle}>
      <span></span><span></span><span></span>
    </div>
  </nav>
);
}
