import React from "react";
import testimonialsStyles from "../styles/testimonials.module.css";

export const Testimonials = () => {
  return (
    <section className={testimonialsStyles.testimonials} id="testimonials">
      <div className="section-title">
        <h2>Testimonials</h2>
        <p>What people say</p>
      </div>
      <div className={testimonialsStyles["testimonial-list"]}>
        <div className={testimonialsStyles.testimonial}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              eum aliquid enim iusto quasi ea cum voluptate porro, eligendi
              dolorem accusamus veritatis unde omnis molestiae sit corrupti.
              Saepe, sed sapiente.
            </p>
          </div>
          <figure>
            <img src="/img/hero.jpg" alt="profile" />
            <figcaption>Velicity</figcaption>
          </figure>
        </div>
        <div className={testimonialsStyles.testimonial}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              eum aliquid enim iusto quasi ea cum voluptate porro, eligendi
              dolorem accusamus veritatis unde omnis molestiae sit corrupti.
              Saepe, sed sapiente.
            </p>
          </div>
          <figure>
            <img src="/img/hero.jpg" alt="profile" />
            <figcaption>Velicity</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
