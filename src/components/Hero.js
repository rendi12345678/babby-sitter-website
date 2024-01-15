import React, { useContext } from "react";
import heroStyles from "../styles/hero.module.css";
import { AppContext } from "../App";


const Hero = () => {
  const { scrollToElement, showFullSizeImage, images } =
  useContext(AppContext);

  return (
    <>
      <section className={heroStyles.hero} id="hero">
        <div className={heroStyles.info}>
          <h1>Ningsih Nanny</h1>
          <p>Experienced, flexible, fun, reliable & first Aid trained.</p>
          <button onClick={scrollToElement}>Call Me Now</button>
        </div>
        <figure className={heroStyles.image}>
          <img
            src={images[0]}
            alt="Nanny"
            onClick={() => showFullSizeImage(images[0])}
          />
        </figure>
      </section>
    </>
  );
};

export default Hero;
