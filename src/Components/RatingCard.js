import React from 'react';
import StarRating from './StarRating';
function RatingCard(){
    return(
        <div className="RatingCard"> 
            <p>4.0</p>
            <StarRating rating={4} />
        </div>
    )
}
export default RatingCard;