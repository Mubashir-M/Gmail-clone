import { Checkbox, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
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
import { db } from './firebase'

function EmailList() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
        setEmails(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          }))
        )
      );
  },[])

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
        
        {emails && emails.map(({id, data: {to, subject, message, timestamp}}) => (
          <EmailRow
            id = {id}
            key = {id} 
            title = {to} 
            subject = {subject}
            description = {message}
            time ={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow programmer" description= "This is a test case" time ="10pm"/>

      </div>
    </div>
  );
}

export default EmailList;