// Review.js
import React, { useState } from 'react';
import reviewsData from './reviewsData';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewsData[index];

  const checkIndex = (number) => {
    if (number < 0) {
      return reviewsData.length - 1;
    }
    if (number >= reviewsData.length) {
      return 0;
    }
    return number;
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * reviewsData.length);
    if (newIndex === index) {
      newIndex = checkIndex(newIndex + 1);
    }
    setIndex(newIndex);
  };

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" />
      <h4 className="author" id={`author-${index + 1}`}>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>Prev</button>
        <button className="next-btn" onClick={nextReview}>Next</button>
      </div>
      <button className="random-btn" onClick={randomReview}>surprise me</button>
    </div>
  );
};

export default Review;
