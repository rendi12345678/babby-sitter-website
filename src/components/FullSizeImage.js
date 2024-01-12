import React from 'react'
import fullSizeImageStyles from "../styles/full-size-image.module.css"

export const FullSizeImage = ({imageUrl}) => {
  return (
    <section className={fullSizeImageStyles.overlay}>
      <h2>Full Size Image</h2>
      <img src={imageUrl} alt="Full Size Image" />
    </section>
  )
}
