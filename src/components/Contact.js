import React, { lazy, useContext, useEffect, useState, Suspense } from "react";
import contactStyles from "../styles/contact.module.css";
import { AppContext } from "../App.js";

const BingMapsReact = lazy(() => import("bingmaps-react"))

const Contact = () => {
  const apiKey =
    "AqoMZX6lawABgf7PAvs5Nf9rS3kS9mYgaHSLnVKw1YbW1ZHzbfMhLxTW6FK20fj_";
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { contactRef } = useContext(AppContext);

  const initialLocation = { latitude: -8.645353, longitude: 115.191429 };

  const pushPin = {
    center: {
      latitude: initialLocation.latitude,
      longitude: initialLocation.longitude,
    },
    options: {
      title: "Ningsih Nanny Home",
    },
  };

  const pushPins = [pushPin];

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <>
      <section className={contactStyles.contact} id="contact" ref={contactRef}>
        <div className={contactStyles["contact-info"]}>
          <h2>Contact Me</h2>
          <p>Let's call me now</p>
          <div className={contactStyles.contactInfoList}>
            <figure>
              <div>
                <img
                  src={
                    isDarkMode ? "/img/location.svg" : "/img/location-dark.svg"
                  }
                  alt="location"
                />
              </div>
              <figcaption>
                Jl Gunung Andakasa, Gang Jepun No. 10, Denpasar Barat, Denpasar,
                Bali 80118, Indonesia
              </figcaption>
            </figure>
            <figure>
              <div>
                <img
                  src={
                    isDarkMode
                      ? "/img/telephone.svg"
                      : "/img/telephone-dark.svg"
                  }
                  alt="telephone"
                />
              </div>
              <figcaption>+62 812-3832-0491</figcaption>
            </figure>
            <figure>
              <div>
                <img
                  src={isDarkMode ? "/img/mail.svg" : "/img/mail-dark.svg"}
                  alt="email"
                />
              </div>
              <figcaption>larasatiningsih58@gmail.com</figcaption>
            </figure>
            <figure>
              <div>
                <img
                  src={
                    isDarkMode ? "/img/facebook.svg" : "/img/facebook-dark.svg"
                  }
                  alt="facebook"
                />
              </div>
              <figcaption>Ningsih Nanny</figcaption>
            </figure>
          </div>
        </div>
        <div
          style={{ borderRadius: "var(--border-radius)", overflow: "hidden" }}
        >
          <Suspense fallback={<p>Loading...</p>}>
          <BingMapsReact
            bingMapsKey={apiKey}
            height="clamp(35rem, 41svw, 41rem)"
            width="100%"
            mapOptions={{
              navigationBarMode: "square",
            }}
            pushPins={pushPins}
            viewOptions={{
              center: {
                latitude: initialLocation.latitude,
                longitude: initialLocation.longitude,
              },
              mapTypeId: "aerial",
              zoom: 10,
            }}
          />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Contact;
