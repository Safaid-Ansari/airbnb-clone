import React from "react";
import "./Header.css";

import LanguageIcon from "@material-ui/icons/Language";

import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="innerSpan">
        <span>Become a host</span>
      </div>

      <div className="header__right">
        <span>
          <LanguageIcon />
        </span>
        <div className="avatar">
          <i class="fa-solid fa-bars"></i>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
