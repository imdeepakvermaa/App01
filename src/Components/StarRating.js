import React from 'react'
function StarRating({rating}){
    const ratingArray = Array.from({ length: rating });
    const emptyStar = Array.from({ length: 5 - rating });

    return(
    <div className="rating">
    {ratingArray.map((_, index) => (
        <span className="star">&#9733;</span>
      ))}
    {emptyStar.map((_, index) => (
        <span className="empty-star">&#9734;</span>
      ))}
    </div>
    );
}
export default StarRating;