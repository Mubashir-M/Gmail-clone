import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailList.css'
import EmailRow from './EmailRow';

import Section from './Section';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'


function EmailList() {


  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
          <IconButton>
            <RefreshIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ArrowBackIosIcon className="arrow"/>
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon className="arrow"/>
          </IconButton>
          <IconButton>
            <KeyboardIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon = {InboxIcon} title ='Primary' color ='red' selected />
        <Section Icon = {PeopleIcon} title ='Social' color ='#1A73E8'  />
        <Section Icon = {LocalOfferIcon} title ='Promotions' color ='green'  />
      </div>
      <div className="emailList__list">
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
 
      </div>
    </div>
  );
}

export default EmailList;