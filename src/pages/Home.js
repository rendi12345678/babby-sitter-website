import React from "react";
import containerStyles from "../styles/container.module.css"
import { Navbar } from "../components/Navbar.js";
import { Hero } from "../components/Hero.js";
import { About } from "../components/About.js";
import { Services } from "../components/Services.js";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className={containerStyles.container}>
        <About/>
      </div>
      <div className={containerStyles["services-container"]}>
        <Services/>
      </div>
    </>
  );
};
