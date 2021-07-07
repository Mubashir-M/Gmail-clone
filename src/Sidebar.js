import React from 'react';
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import {  openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className = "sidebar">
      <Button
        className = "sidebar__compose" 
        startIcon={<AddIcon fontSize = 'large' primary ='white'/>}
        onClick = {() => dispatch(openSendMessage())}
        >
        Compose
      </Button>

      <SidebarOption Icon ={ InboxIcon } title ="Inbox" number = {54} selected ={true}/>
      <SidebarOption Icon ={ StarIcon } title ="Starred" number = {24} />
      <SidebarOption Icon ={ WatchLaterIcon } title ="Snoozed" number = {22} />
      <SidebarOption Icon ={ LabelImportantIcon } title ="Important" number = {21} />
      <SidebarOption Icon ={ NearMeIcon } title ="Sent" number = {2} />
      <SidebarOption Icon ={ NoteIcon } title ="Drafts" number = {26} />
      <SidebarOption Icon ={ ExpandMoreIcon } title ="More" number = {62} />
    
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <VideocamIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;