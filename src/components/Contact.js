import React from "react";
import contactStyles from "../styles/contact.module.css";
import BingMapsReact from "bingmaps-react";

export const Contact = () => {
  const apiKey =
    "AqoMZX6lawABgf7PAvs5Nf9rS3kS9mYgaHSLnVKw1YbW1ZHzbfMhLxTW6FK20fj_";

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

  return (
    <>
      <section className={contactStyles.contact}>
        <div className={contactStyles["contact-info"]}>
          <h2>Contact Me</h2>
          <p>Lets call me now</p>
          <div className={contactStyles.contactInfoList}>
            <figure>
              <div>
                <img src="/img/location-dark.png" alt="location" />
              </div>
              <figcaption>
                Gang Jepun No. 10, Denpasar Barat, Denpasar, Bali 80118,
                Indonesia
              </figcaption>
            </figure>
            <figure>
              <div>
                <img src="/img/phone-dark.png" alt="telephone" />
              </div>
              <figcaption>+62 812-3832-0491</figcaption>
            </figure>
            <figure>
              <div>
                <img src="/img/mail-dark.png" alt="email" />
              </div>
              <figcaption>larasatiningsih58@gmail.com</figcaption>
            </figure>
            <figure>
              <div>
                <img src="/img/facebook-dark.png" alt="facebook" />
              </div>
              <figcaption>Ningsih Nanny</figcaption>
            </figure>
          </div>
        </div>
        <div style={{borderRadius: "var(--border-radius)", overflow: "hidden"}}>
          <BingMapsReact
            bingMapsKey={apiKey}
            height="40rem"
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
          ></BingMapsReact>
        </div>
      </section>
    </>
  );
};
