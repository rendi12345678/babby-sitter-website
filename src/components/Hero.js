import React, {useContext} from 'react'
import heroStyles from "../styles/hero.module.css"
import { AppContext } from '../App';

export const Hero = () => {
  const { scrollToElement } = useContext(AppContext);

  return (
    <>
    <section className={heroStyles.hero} id='hero'>
      <div className={heroStyles.info}>
        <h1>Ningsih Nanny</h1>
        <p>Experienced, flexible, fun, reliable & frist Aid trained.</p>
        <button onClick={scrollToElement}>Call Me Now</button>
      </div>
      <figure className={heroStyles.image}>
        <img src="/img/hero4.jpg" alt="Nanny" />
      </figure>
    </section>
      </>
  )
}
