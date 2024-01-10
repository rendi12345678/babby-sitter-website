import React from "react";
import certificateStyles from "../styles/certificate.module.css";

export const Certificate = () => {
  return (
    <section className={certificateStyles.certificate}>
      <div className="section-title">
        <h2>My Certificate</h2>
        <p>What is it</p>
      </div>
      <figure>
        <img src="/img/certificate.png" alt="certificate" />
      </figure>
    </section>
  );
};
