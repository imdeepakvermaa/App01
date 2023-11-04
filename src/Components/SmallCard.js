import React from 'react';
function SmallCard({text="Data is Loaded Succesfully"}){
    return(
        <div className="SmallCard"> 
            <p>{text}</p>
        </div>
    )
}
export default SmallCard;