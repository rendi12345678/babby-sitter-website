import React, { useEffect, useState } from "react";
import galleryStyles from "../styles/gallery.module.css";
import axios from "axios";

export const Gallery = () => {
  const accessToken = "EAAzvYhSmyUMBO4bHa1CoJzulE1FFJanMS2K1aCYgkDtiG6AdWHCmCbaMMZCGei9IkYkzydrNIgha8qNBD0z8XjiiDAnBkJdmXRa96nZARZBQcwxZBYv0NnRI7yB0cAZCWPCzf1WipX9hrgpH7sjVjqZCHQ13ZBp32dJWhNVbtn1jG8cKyl2TC2or6N5Qw7dHIZAokdIsr3p4iZC6dDa6ZCa6SMKv9qqWLk";
  const nannyId = "100005743309213";
  const [images, setImages] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(url);

    console.log(response);
  };

  useEffect(() => {
    fetchData(
      `100005743309213?fields=id, name&access_token=EAAzvYhSmyUMBO2XhQKgqNGgzO3E7O6aResdUge56vIpZAb6P0nkIMV2ZBFv5pXQboSJv6iNdpb1GHGWj9Q5f4b5GVZBj92cUp5xnqvWb4xZA9V2ZCkIfJT8Tx8gMEdUBn4TwyAloTsB1Xgh9sf5VI1EmYymtNXZBEB0zfixRwZAmGBlwzwZCJm6NZB4knW0DnU3ZCScY3Q9yK0bxCNa61MeN0ZD`
    );
  }, []);

  return (
    <section className={galleryStyles.gallery}>
      <div className="section-title">
        <h2>My Gallery</h2>
        <p>Let's see those</p>
      </div>
      <div className={galleryStyles["gallery-list"]}>
        <figure className={galleryStyles.item}>
          {/* <img src={images} alt="gallery item" /> */}
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x601"
            alt="gallery item"
          />
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x602"
            alt="gallery item"
          />
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x603"
            alt="gallery item"
          />
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x604"
            alt="gallery item"
          />
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x605"
            alt="gallery item"
          />
        </figure>
        <figure className={galleryStyles.item}>
          <img
            src="https://source.unsplash.com/random/800x606"
            alt="gallery item"
          />
        </figure>
      </div>
    </section>
  );
};
