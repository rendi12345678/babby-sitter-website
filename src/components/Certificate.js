import React from "react";
import certificateStyles from "../styles/certificate.module.css";

const Certificate = () => {
  return (
    <section className={certificateStyles.certificate} id="certificate">
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

export default Certificate;