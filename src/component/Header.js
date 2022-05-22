import React from "react";
import "./Header.css";
import AmazonLogo from "../images/amazon-logo.png";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={AmazonLogo} alt="Amazon Logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <NavLink to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCart />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
