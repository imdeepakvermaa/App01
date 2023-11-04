import React from 'react';
import searchicon from "../Assets/searchicon.png"
function SearchBar(){
    return(
        <div className="SearchBar"> 
            <div >
                <input className="SearchBarInput" type="text" placeholder="Search"/>
                <div className="SearchIcon">
                <button className="SearchIconButton">
                    <img className="SearchIconImg" src={searchicon} alt="Search"/>
                </button>
                </div>
            </div>
            
        </div>
    )
}
export default SearchBar;