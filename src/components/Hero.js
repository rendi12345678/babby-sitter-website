import React from 'react'
import heroStyles from "../styles/hero.module.css"

export const Hero = () => {
  return (
    <>
    <section className={heroStyles.hero}>
      <div className={heroStyles.info}>
        <h1>Experienced Nanny</h1>
        <p>With over 10 years of experience, I provide exceptional childcare as your trusted nanny in Bali.</p>
        <button>Call Me Now</button>
      </div>
      <figure className={heroStyles.image}>
        <img src="/img/hero4.jpg" alt="Nanny" />
      </figure>
    </section>
      </>
  )
}
