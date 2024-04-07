import React, { useState } from 'react';

const PhotoSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 4 : prevIndex - 1));
  };

  return (
    <div className="photo-slider">
      <div className="slider-container">
        {images.slice(slideIndex, slideIndex + 4).map((image, index) => (
          <div
            key={index}
            className={`slide`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default PhotoSlider;
