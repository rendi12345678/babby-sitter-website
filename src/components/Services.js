import React from "react";
import servicesStyles from "../styles/services.module.css";

export const Services = () => {
  return (
    <section className={servicesStyles.services} id="services">
      <div className="section-title">
        <h2>My Services</h2>
        <p>What do i offer</p>
      </div>
      <ul>
        <li>
          <h4>First Aid Expertise</h4>
          <p>
            I am trained first aid from hospital BIMC kuta, so your children
            will be safe
          </p>
        </li>
        <li>
          <h4>Swimming Supervision</h4>
          <p>I can swim and comfortable in the water pool, beach with kids</p>
        </li>
        <li>
          <h4>English Communication</h4>
          <p>
            I am speak english so can communicate well with your childrens, I
            carry some fun toys, to play and also do simple art and craft , put
            kids to bed, cooking meal, & follow your routine
          </p>
        </li>
      </ul>
    </section>
  );
};
