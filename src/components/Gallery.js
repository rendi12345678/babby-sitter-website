import React from 'react'
import galleryStyles from "../styles/gallery.module.css"

export const Gallery = () => {
  return (
    <section className={galleryStyles.gallery}>
      <div className="section-title">
        <h2>My Gallery</h2>
        <p>Lets see they are</p>
      </div>
      <div className={galleryStyles["gallery-list"]}>
         <figure className={galleryStyles.item}>
            <img src="/img/hero4.jpg" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="/img/hero4.jpg" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="/img/hero4.jpg" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="/img/hero4.jpg" alt="gallery item" />
         </figure>
      </div>
    </section>
  )
}
