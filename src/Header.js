import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
  return (
    <div className = "header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img 
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" 
          alt="" 
        />
      </div>
      <div className="header__middle">
        <SearchIcon/>
        <input type="text" placeholder = "Search mail" />
        <IconButton>
          <ArrowDropDownIcon/>
        </IconButton>
        
      </div>
      <div className="header__right">
        <IconButton>
          < HelpOutlineIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <PersonIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;