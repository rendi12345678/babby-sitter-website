import React from 'react'
import { HashLink } from 'react-router-hash-link';
import navStyles from "../styles/navbar.module.css"

export const Navbar = () => {
  return (
    <header className={navStyles.header}>
        <h4>Ningsih</h4>
        <nav>
            <ul>
                <li>
                    <HashLink>Home</HashLink>
                </li>
                <li>
                    <HashLink>About</HashLink>
                </li>
                <li>
                    <HashLink>Services</HashLink>
                </li>
                <li>
                    <HashLink>Testimonials</HashLink>
                </li>
                <li>
                    <HashLink>Gallery</HashLink>
                </li>
                <li>
                    <HashLink>Contact</HashLink>
                </li>
            </ul>
        </nav>
        <div>
            <button>Sign Up</button>
            <button>Login</button>
        </div>
    </header>
  )
}
