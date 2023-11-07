import React,{useEffect, useState} from 'react';


function FavouriteButton(){
    const[isfav,setisfav]=useState(0);
    const [favbtn,setfavbtn]=useState("far fa-heart fa-2x");
    const [response,setResponse]=useState('');


    async function handleFav(){
        if(isfav){
            setfavbtn("far fa-heart fa-2x");
            setisfav(0);
        }
        else{
            setfavbtn("fa fa-heart fa-2x");
            setisfav(1);
        }
    }
    return( <div className="action-main">
            <div className="actionBtns">
                <button onClick={(e) =>{handleFav()}} className="fav_btn" style={{"outline":"none","border":"0px","background":"none"}}>
                    <i className={favbtn}  style={isfav==0?({"color":"black"}):({"color":"red"})}></i>
                </button>
            </div>
        </div>
        
    )
    
}
export default FavouriteButton;