import React from "react";
import SearchButton from "./SearchButton";
import SignButton from "./SignButton";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} alt="Logo" />
        <h3>BrandName</h3>
      </div>

      <div className="Second-part-nav-bar">
        <ul className="Elements">
          <li>Home</li>
          <li>Orders</li>
          <div className="btn">
            <li>
              <SearchButton text={"Search"} />
            </li>
            <li>
              <SignButton text={"SignUp"} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
