import React from "react";
import image from "../Assets/Himalaya_mountains 1.png";
import SearchButton from "./SearchButton";
import SignButton from "./SignButton";
const ResultBox = () => {
  return (
    <div className="result-box">
      <div className="result-box-container">
        <div className="result-box-bg">
          <img className="result-box-image" src={image} alt="pic" />

          <div className="result-box-texts">

              <p className="result-box-p">
                Title is should be 100 character long according to define length
              </p>


            <div className="result-box-btn">
              <p>0 Likes</p>
              <p>0 Comment</p>
              <p>0 Share</p>
              <div >
                <SearchButton className="result-box-searchbtn" text={"View"} />
              </div>
              <div >
                <SignButton className="result-box-sharebtn" text={"Share"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
