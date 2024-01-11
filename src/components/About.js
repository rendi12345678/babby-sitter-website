import React from "react";
import aboutStyles from "../styles/about.module.css";

export const About = () => {
  return (
    <section className={aboutStyles.about} id="about">
      <figure className={aboutStyles.image}>
        <img src="/img/hero4.jpg" alt="About" />
        <img src="/img/hero3.jpg" alt="About" />
        <img src="/img/hero.jpg" alt="About" />
      </figure> 
      <div className={aboutStyles.info}>
      <div className="section-title">
        <h2>About Me</h2>
        <p>My introduction</p>
      </div>
        <p>
        Embark on a journey of peace with Larasati Ningsih, your devoted nanny of over 10 years. Bringing a fusion of warmth and professionalism, I create a loving environment filled with imaginative play and educational adventures. Certified in CPR and First Aid, I prioritize safety, ensuring your child's well-being is my topmost concern. Beyond conventional childcare, I offer flexibility and genuine care, tailoring support to your family's unique needs. Join me in a world where your child's growth and happiness take center stage, making each moment a cherished memory in your parenting journey.
        </p>
      </div>
    </section>
  );
};
