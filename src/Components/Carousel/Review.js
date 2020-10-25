import React from "react";

function Review({ reviews }) {
  return reviews.map((review, index) => (
    <div className="review-component" id={`slide${index}`} key={index}>
      <p>{review.name}</p>
      <p>{review.review}</p>
    </div>
  ));
}
export default Review;
