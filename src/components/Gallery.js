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
            <img src="https://source.unsplash.com/random/800x600" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x601" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x602" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x603" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x604" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x605" alt="gallery item" />
         </figure>
         <figure className={galleryStyles.item}>
            <img src="https://source.unsplash.com/random/800x606" alt="gallery item" />
         </figure>
      </div>
    </section>
  )
}
