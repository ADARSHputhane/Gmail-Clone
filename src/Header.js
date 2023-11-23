import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./Header.css";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDownwardIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
