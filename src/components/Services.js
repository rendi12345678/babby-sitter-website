import React from 'react'
import servicesStyle from "../styles/services.module.css"

export const Services = () => {
  return (
    <section className={servicesStyle.services}>
      <div className='section-title'>
        <h2>My Services</h2>
        <p>What we offer</p>
      </div>
      <div className={servicesStyle["service-list"]}>
        <div>
          <h3>01</h3>
          <h4>Tailored Nurturing</h4>
          <p>Individually crafted care plans for your little ones, ensuring a nurturing environment.</p>
        </div>
        <div>
          <h3>02</h3>
          <h4>Safe & Stimulating</h4>
          <p>Experienced nannies providing secure, engaging care that fosters growth and curiosity.</p>
        </div>
        <div>
          <h3>03</h3>
          <h4>Well-being Priority</h4>
          <p>Professional nanny services committed to prioritizing your child's safety and happiness.</p>
        </div>
        <div>
          <h3>04</h3>
          <h4>Flexible Scheduling Harmony</h4>
          <p>Schedules designed to fit seamlessly into your lifestyle, bringing harmony to your family.</p>
        </div>
        <div>
          <h3>05</h3>
          <h4>Bonding and Growth</h4>
          <p>Passionate caregivers fostering strong bonds and contributing to your child's development.</p>
        </div>
        <div>
          <h3>06</h3>
          <h4>Peace of Mind Assurance</h4>
          <p>Experience serenity knowing your children are in safe hands, where safety and smiles go hand in hand.</p>
        </div>
      </div>
    </section>
  )
}
