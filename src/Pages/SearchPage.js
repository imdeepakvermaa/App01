import React from 'react';
import SearchBar from "../Components/SearchBar.js";
import SmallCard from "../Components/SmallCard.js";
const recentSeach = ["Best Place in Delhi","Best Place in Haryana","Best Place in Goa","Best Place in Rishikesh"]
function SearchPage(){
    return(
        <div className="SearchPage"> 
            <div className="SearchBarDiv">
                <SearchBar/>
            </div>
            <div className="SearchBarDiv1">

            <div className="recentsearches">
                <h3 style={{"font-size":"25px"}} >Recent Searches</h3>
            </div>
            <div className="recentsearcheslist">
            {recentSeach.map((item,index)=>(
                <SmallCard text={item}/>
                ))}
            </div>
            </div>
        </div>
   )
}
export default SearchPage; 