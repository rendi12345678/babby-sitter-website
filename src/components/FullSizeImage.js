import React, { useContext, useEffect, useState } from "react";
import fullSizeImageStyles from "../styles/full-size-image.module.css";
import { AppContext } from "../App";

export const FullSizeImage = ({ imageUrl }) => {
  const { closeFullSizeImage, setFullSizeImageUrl, images } = useContext(AppContext);
  const [prevImageUrl, setPrevImageUrl] = useState("")
  const [nextImageUrl, setNextImageUrl] = useState("")

  const getImageIndex = imageUrl => {
    return images.findIndex(image => image === imageUrl)
  }

  useEffect(() => {
    const fullSizeImageIndex = getImageIndex(imageUrl)
    setPrevImageUrl(images[fullSizeImageIndex > 0 ? fullSizeImageIndex - 1 : images.length - 1])
    setNextImageUrl(images[fullSizeImageIndex < images.length - 1 ? fullSizeImageIndex + 1 : 0])
    console.log(nextImageUrl);
  }, [imageUrl, images])

  return (
    <div className={fullSizeImageStyles.overlay}>
      <figure>
        <img src={imageUrl} alt="Full Size" />
        <div className={fullSizeImageStyles.buttons}>
          <button onClick={() => setFullSizeImageUrl(prevImageUrl)}>Prev</button>
          <button onClick={closeFullSizeImage}>
            Close
          </button>
          <button onClick={() => setFullSizeImageUrl(nextImageUrl)}>Next</button>
        </div>
      </figure>
    </div>
  );
};
