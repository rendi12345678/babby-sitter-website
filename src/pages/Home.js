import React, { lazy, Suspense } from "react";
import containerStyles from "../styles/container.module.css";

const Navbar = lazy(() => import("../components/Navbar.js"));
const Hero = lazy(() => import("../components/Hero.js"));
const About = lazy(() => import("../components/About.js"));
const Certificate = lazy(() => import("../components/Certificate.js"));
const Testimonials = lazy(() => import("../components/Testimonials.js"));
const Gallery = lazy(() => import("../components/Gallery.js"));
const Contact = lazy(() => import("../components/Contact.js"));
const Footer = lazy(() => import("../components/Footer.js"));
const Services = lazy(() => import("../components/Services.js"));

const Home = () => {
  return (
    <>
      <div className={containerStyles["navbar-container"]}>
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className={containerStyles["hero-container"]}>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
      </div>
      <div className={containerStyles.container}>
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Services...</div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div>Loading Certificate...</div>}>
          <Certificate />
        </Suspense>
      </div>
      <div className={containerStyles.container2}>
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>
      </div>
      <div className={containerStyles.container}>
        <Suspense fallback={<div>Loading Gallery...</div>}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </div>
      <div className={containerStyles.footerContainer}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
