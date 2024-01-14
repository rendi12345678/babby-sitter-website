import React, { useContext, useEffect, useState } from "react";
import galleryStyles from "../styles/gallery.module.css";
import { AppContext } from './../App';

export const Gallery = () => {
   const {images, showFullSizeImage} = useContext(AppContext)

  return (
    <section className ={galleryStyles.gallery} id="gallery">
      <div className="section-title">
        <h2>My Gallery</h2>
        <p>Let's see those</p>
      </div>
      <div className={galleryStyles["gallery-list"]}>
        <figure className={galleryStyles.item}>
        <img
            src={images[3]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[3])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[4]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[4])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[5]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[5])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[6]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[6])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[7]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[7])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[8]}
            
            alt="gallery item"
            onClick={() => showFullSizeImage(images[8])}
          />
        </figure>
        <figure className={galleryStyles.item}>
           <img
            src={images[9]}
            alt="gallery item"
            onClick={() => showFullSizeImage(images[9])}
          />
        </figure>
      </div>
    </section>
  );
};
