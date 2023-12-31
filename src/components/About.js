import React from "react";
import aboutStyles from "../styles/about.module.css";

export const About = () => {
  return (
    <section className={aboutStyles.about}>
      <div className="section-title">
        <h2>About Me</h2>
        <p>My introduction</p>
      </div>
      <figure className={aboutStyles.image}>
        <img src="/img/hero4.jpg" alt="About" />
        <img src="/img/hero3.jpg" alt="About" />
        <img src="/img/hero.jpg" alt="About" />
      </figure>
      <div className={aboutStyles.info}>
        <p>
        Discover peace of mind with Larasati Ningsih, your trusted nanny. With over 10 years years of nurturing experience, i brings a blend of warmth and professionalism to your family. From imaginative play to educational activities, I am committed to creating a loving environment for your little ones. Certified in CPR and First Aid, I prioritizes safety, ensuring your child's well-being is always in capable hands. Embrace a partnership that goes beyond childcare — i am here to support your family's unique needs with flexibility and genuine care. Welcome to a world where your child's growth and happiness are at the heart of everything we do. Let me be the dependable ally in your parenting journey, making every moment a cherished memory.
        </p>
      </div>
    </section>
  );
};
