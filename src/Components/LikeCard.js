import React from 'react';
import like from "../Assets/like.png"
function LikeCard({text="Data is Loaded Succesfully"}){
    return(
        <div className="LikeCard"> 
            <img className="LikeCardImg" src={like} alt="Likes"/>
            <p><strong>40 K</strong></p>
        </div>
    )
}
export default LikeCard;