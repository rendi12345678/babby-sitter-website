import React from 'react'
import { HashLink } from 'react-router-hash-link';
import navStyles from "../styles/navbar.module.css"

export const Navbar = () => {
  return (
    <header className={navStyles.header}>
        <h3>Ningsih</h3>
        <nav>
            <ul>
                <li>
                    <HashLink>Home</HashLink>
                </li>
                <li>
                    <HashLink>About Me</HashLink>
                </li>
                <li>
                    <HashLink>Gallery</HashLink>
                </li>
                <li>
                    <HashLink>Contact Me</HashLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
