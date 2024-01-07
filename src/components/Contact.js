import React, { useEffect, useRef, useState } from "react";
import contactStyles from "../styles/contact.module.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 41.3851,
  lng: 2.1734,
};

export const Contact = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const apiKey = "AIzaSyCW6dOsi08OPHni-1JOC1LimrtfRdGnhgI";

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <>
      <section className={contactStyles.contact}>
        <div className={contactStyles.title}>
          <h2>Contact Me</h2>
          <p>Lets call me now</p>
        </div>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentPosition}
          >
            {currentPosition.lat && <Marker position={currentPosition} />}
          </GoogleMap>
        </LoadScript>
      </section>
    </>
  );
};
