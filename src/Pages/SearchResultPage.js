import React from "react";
import ResultBox from "../Components/ResultBox";

const SearchResultPage = () => {
  return (
    <div>
      <div>
        <h2 className="res-page-main-con-search">Search Result for</h2>
      </div>
      <div className="res-page-main-con">
        <div className="res-page-con1">
          <div className="">
            <div>
              <h3 className="res-page-con1-h3">Tool 1</h3>
              <div className="res-page-box-1"></div>
            </div>

            <div>
              <h3 className="res-page-con1-h3">Tool 2</h3>
              <div className="res-page-box-2"></div>
            </div>
          </div>
        </div>

        <div className="res-page-main-con">
          <div className="all-result-box">
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
            <ResultBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
