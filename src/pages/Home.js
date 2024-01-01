import React from "react";
import containerStyles from "../styles/container.module.css";
import { Navbar } from "../components/Navbar.js";
import { Hero } from "../components/Hero.js";
import { About } from "../components/About.js";
import { Services } from "../components/Services.js";
import { Testimonials } from "../components/Testimonials.js";
import { Gallery } from "../components/Gallery.js";
import { Contact } from "../components/Contact.js";

export const Home = () => {
  return (
    <>
      <div className={containerStyles["navbar-container"]}>
        <Navbar />
      </div>
      <div className={containerStyles["hero-container"]}>
        <Hero />
      </div>
      <div className={containerStyles.container}>
        <About />
        <Services />
      </div>
      <div className={containerStyles.container2}>
        <Testimonials />
      </div>
      <div className={containerStyles.container}>
        <Gallery/>   
        <Contact/>
      </div>
    </>
  );
};
