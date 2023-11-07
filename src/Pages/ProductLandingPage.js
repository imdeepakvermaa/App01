import React from 'react';
import RatingCard from '../Components/RatingCard';
import LikeCard from '../Components/LikeCard';
import ShareCard from '../Components/ShareCard';
import FavouriteButton from '../Components/FavouriteButton';
import Random from '../Assets/Random.jpg';
import SignButton from "../Components/SignButton";
import SearchButton from "../Components/SearchButton";

function ProductLandingPage(){
    return(
        <div className="ProductLandingPage">
            <div className="ProductLandingPagediv1"> 
                <div className="ProductLandingImage">
                    <img style={{"height":"20rem","width":"40rem","border-radius":"2rem"}} src={Random} alt="Image"/>
                </div>
                <div className="ProductLandingDetails">
                    <div className="ProductLandingPageTitle">
                        <h2 className="ProductLandingPageTitleHeading" >Title of the video the length should be 100 characters long</h2>
                    </div>
                    <div className="ProductLandingPageActions">
                        <RatingCard/>
                        <LikeCard/>
                        <ShareCard/>
                        <FavouriteButton/>
                    </div>
                </div>
            </div>
            <div className="ProductLandingPagediv2">
                <p className="div2Paragraph">
                <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </strong>
                </p>
            </div>
            <div className="ProductLandingPagediv3">
                <SearchButton text={"Save"} />
                <SignButton text={"Add Now"} />
            </div>
        </div>
    )
}
export default ProductLandingPage;