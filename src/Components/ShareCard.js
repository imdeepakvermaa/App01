import React from 'react';
import share from "../Assets/share.png"
function ShareCard({text="Data is Loaded Succesfully"}){
    return(
        <div className="ShareCard"> 
            <img className="LikeCardImg" src={share} alt="Share"/>
            <p><strong>Share</strong></p>
        </div>
    )
}
export default ShareCard;