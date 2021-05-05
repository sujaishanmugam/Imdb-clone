import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./imdb.png";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
  return (
    <div className="header">
      <img  onClick={() => window.scroll(0, 0)}  className="header__logo" src={logo} alt="Imdb" />
      <MenuIcon className="hamburger" />
      
    </div>
    
  );
}

export default Header;
