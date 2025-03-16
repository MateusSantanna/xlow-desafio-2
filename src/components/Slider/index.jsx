import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = ({ images }) => {
  const [imageIndex, setimageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const nextImage = () => {
    setimageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setimageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToSlide = (index) => {
    setimageIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.arrow} onClick={prevImage}>
        &#10094;
      </button>
      <a href={images[imageIndex].link} target="_blank">
        <img
          src={images[imageIndex].url}
          alt={images[imageIndex].alt}
          className={styles.image}
        />
      </a>
      <button className={styles.arrow} onClick={nextImage}>
        &#10095;
      </button>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === imageIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
