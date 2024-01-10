import React from "react";
import containerStyles from "../styles/container.module.css";
import { Navbar } from "../components/Navbar.js";
import { Hero } from "../components/Hero.js";
import { About } from "../components/About.js";
import { Certificate } from "../components/Certificate.js";
import { Testimonials } from "../components/Testimonials.js";
import { Gallery } from "../components/Gallery.js";
import { Contact } from "../components/Contact.js";
import { Footer } from "../components/Footer.js";

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
        <Certificate />
      </div>
      <div className={containerStyles.container2}>
        <Testimonials />
      </div>
      <div className={containerStyles.container}>
        <Gallery />
        <Contact />
      </div>
      <div className={containerStyles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};
